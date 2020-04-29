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
			salad: 1,
			bacon: 1, 
			cheese: 2,
			meat: 2
		}
	}
  render(){
		return(
				<Aux>
					<Burger />
					<div>Build Controls</div>
				</Aux>


		);
	}
}
export default BurgerBuilder;

