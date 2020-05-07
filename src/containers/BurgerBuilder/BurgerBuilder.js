import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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

	addIngredient = (type) => {
		const oldCount = this.state.ingredients[type];
		const upddatedCount = oldCount + 1;
		const updateIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		
	}

	removeIngredient = (type) => {

	}
  render(){
		return(
				<Aux>
					<Burger ingredients={this.state.ingredients} />
					<BuildControls />
					{/* <div>Build Controls</div> */}
				</Aux>


		);
	}
}
export default BurgerBuilder;

