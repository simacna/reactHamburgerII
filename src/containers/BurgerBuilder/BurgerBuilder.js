import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import instance from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
//global constants usually capital
const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
}

class BurgerBuilder extends Component {
	//could've also manage state with:
	// constructor(props){
	// 	super(props);
	// 	this.state = {

	// 	}
	// }

	//we want to give our Burger component below ingredients
	state = {
		ingredients: false,
		totalPrice: 4,
		purchaseable: false, //true if at least 1 ing 
		purchasing: false,
		loading: false,
		error: false
	}

	componentDidMount() {
		axios.get('https://reactburger-562df.firebaseio.com/ingredients.json')
			.then(response => {
				console.log(response.data);
					this.setState({ingredients: response.data})
			}).catch(error => {
				this.setState({error: true})
			})
	}

	purchaseHandler = () => {
		this.setState({purchasing: true});
	}

	updatePurchaseState = (ingredients) =>{
		// const ingredients = {  // this was a copy from the state which led to disable button not working properly
		// 	...this.state.ingredients
		// }
		const sum = Object.keys(ingredients)
		.map(igKey => {
			return ingredients[igKey];
		})
		.reduce((sum, el)=>{
			return sum + el;
		}, 0);
		this.setState({purchaseable: sum > 0})

	}

	purchaseCancelHandler = () => {
		this.setState({purchasing: false});
	}
	purchaseContinueHandler = () => {
		// alert('Yofafas');
		this.setState({loading: true});
		const order = {
			inrgredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'sina',
				address: {
					street: 'test',
					zipCode: '353',
					country: 'US'
				},
				email: 'test'
			}, deliveryMethod: 'fast'
		}
		//for firebase y ou have to add .json
		axios.post('/orders.json', order)
			.then(response => {
				this.setState({loading: false, purchasing: false});
			})
			.catch(error => {
				this.setState({loading: false, purchasing: false});
			});
	}
	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if(oldCount <= 0){
			alert('wo')
			return;
		}
		const updatedCount = oldCount - 1;
		const updateIngredients = {
			...this.state.ingredients
		};
		updateIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({totalPrice: newPrice, ingredients: updateIngredients});
		this.updatePurchaseState(updateIngredients);
		// console.log(newPrice);
	}

 	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updateIngredients = {
			...this.state.ingredients
		};
		updateIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({totalPrice: newPrice, ingredients: updateIngredients});
		this.updatePurchaseState(updateIngredients);
	}
  render(){
		const disabledInfo = {
			...this.state.ingredients
		};
		for(let key in disabledInfo){
		disabledInfo[key] = disabledInfo[key] <= 0
		}
		// let orderSummary = null;
		let orderSummary = <OrderSummary ingredients={this.state.ingredients} 
						purchaseCancelled={this.purchaseCancelHandler}
						purchaseContinue ={this.purchaseContinueHandler}
						price={this.state.totalPrice}/>

		if(this.state.loading) {
			orderSummary = <Spinner />
		}
//{salad: true, meat: false, ... } if true disabled
		return(
				<Aux>
					{/* only if true, modal should be visible */}
					<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> 
						{orderSummary}
					</Modal>
					<Burger ingredients={this.state.ingredients} />
					<BuildControls 
						ingredientAdded = {this.addIngredientHandler}
						ingredientRemoved = {this.removeIngredientHandler}
						disabled={disabledInfo}
						purchaseable={this.state.purchaseable}
						price={this.state.totalPrice}
						ordered={this.purchaseHandler}
					/>

					{/* <div>Build Controls</div> */}
				</Aux>


		);
	}
}
export default withErrorHandler(BurgerBuilder, axios);

