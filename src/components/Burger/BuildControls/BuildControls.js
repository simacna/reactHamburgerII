import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import { privateEncrypt } from 'crypto';
//array to loop through controls
const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
]

const buildControls = (props) => (
  <div className = 'BuildControls'>
    <p> Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl 
      key={ctrl.label} 
      label={ctrl.label} 
      added={() => props.ingredientAdded(ctrl.type)} //type gets passed to burgerbuilder.js <Builcontrols /> addingredienthandler(types)
      removed={() => props.ingredientRemoved(ctrl.type)}
      disabled={props.disabled[ctrl.type]}
      />
    ))}
  </div>

)



export default buildControls;