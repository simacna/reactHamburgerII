import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

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
		}
	}
  render(){
		return(
				<Aux>
					<Burger ingredients={this.state.ingredients} />
					<div>Build Controls</div>
				</Aux>


		);
	}
}
export default BurgerBuilder;

