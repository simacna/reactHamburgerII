import React, {Component} from 'react';
import classes from './Burger'
import { classExpression } from '@babel/types';


class BurgerIngredient extends Component  {
  render() {
     //need some logic to show jsx code to show what ingredient to render
  let ingredient = null; 

  switch(this.props.type){ //type is a property i expected eto receive
    case('bread-bottom'):
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case('bread-top'):
      ingredient = ( //multiline jsx
        <div className={classExpression.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case('meat'):
      ingredient = <div className={classes.Meat}></div>;
      break;
    case('cheese'):
      ingredient = <div className={classes.Cheese}></div>
      break;
    case('salad'):
      ingredient = <div className={classes.Cheese}></div>
      break;
    case('bacon'):
      ingredient = <div className={classes.Bacon}></div>
      break;
    default:
      ingredient = null;
  }
    return ingredient;
  }
 
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired;
}

export default BurgerIngredient;