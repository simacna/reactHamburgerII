import React from 'react';
import BuildControl from './BuildControl/BuildControl';
//array to loop through controls
const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
]

const buildControls = (props) => (
  <div className = 'BuildControls'>
    {controls.map(ctrl => (
      <BuildControl 
      key={ctrl.label} 
      label={ctrl.label} 
      added={() => props.ingredientAdded(ctrl.type)} //type gets passed to burgerbuilder.js <Builcontrols /> addingredienthandler(types)
      />
    ))}
  </div>

)



export default buildControls;