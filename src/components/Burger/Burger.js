import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const Burger = (props) => {
  //transfer objct to key/value pairs below

  let transformedIngredients = Object.keys(props.ingredients)
  .map(ingKey => {
    return([...Array(props.ingredients[ingKey])].map((_, i)=>{
      // console.log('ingKey', ingKey);
      return(<BurgerIngredient key={ingKey+i} type={ingKey} />)
    }));
  }); //extracts keys of given object, gives us an array of keys

  return(
    
    <div className={'Burger'}>
      {/* everything below is hard coded and not being dynamically rendered by state */}
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default Burger;
