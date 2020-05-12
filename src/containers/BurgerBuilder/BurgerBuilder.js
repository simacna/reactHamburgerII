import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
		ingredients: {
			salad: 0,
			bacon: 0, 
			cheese: 0,
			meat: 0
		},
		totalPrice: 4
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
		console.log(newPrice);
	}

	removeIngredientHandler = (type) => {

	}
  render(){
		return(
				<Aux>
					<Burger ingredients={this.state.ingredients} />
					<BuildControls 
						ingredientAdded = {this.addIngredient}
					/>
					
					{/* <div>Build Controls</div> */}
				</Aux>


		);
	}
}
export default BurgerBuilder;

