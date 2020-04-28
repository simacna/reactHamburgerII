import React, {Component} from 'react';
import classes from './BurgerIngredient.css'
import { classExpression } from '@babel/types';

//  console.log('classes', classes);
class BurgerIngredient extends Component  {
  render() {
     //need some logic to show jsx code to show what ingredient to render
  let ingredient = null; 
 

  switch(this.props.type){ //type is a property i expected eto receive
    case('bread-bottom'):
      ingredient = <div className={'BreadBottom'}></div>;
      break;
    case('bread-top'):
      ingredient = ( //multiline jsx
        <div className={'BreadTop'}>
          <div className={'Seeds1'}></div>
          <div className={'Seeds2'}></div>
        </div>
      );
      break;
    case('meat'):
      ingredient = <div className={'Meat'}></div>;
      break;
    case('cheese'):
      ingredient = <div className={'Cheese'}></div>
      break;
    case('salad'):
      ingredient = <div className={'Salad'}></div>
      break;
    case('bacon'):
      ingredient = <div className={'Bacon'}></div>
      break;
    default:
      ingredient = null;
  }
    return ingredient;
  }
 
}

// BurgerIngredient.propTypes = {
//   type: PropTypes.string.isRequired
// }

export default BurgerIngredient;