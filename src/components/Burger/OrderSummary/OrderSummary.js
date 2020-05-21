import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return(<li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>)
    })
  return(
    <Aux>
      <h2> Your order </h2>
      <p> your burgers</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price:</strong> ${props.price.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCancelled}>Cancel</Button>
      <Button clicked={props.purchaseContinue}>Continue</Button>
    </Aux>
  )
}


export default orderSummary;