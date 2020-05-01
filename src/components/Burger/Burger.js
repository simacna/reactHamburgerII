import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  //transfer objct to key/value pairs below
  const transformedIngredients = Object.keys(props.ingredients)
  .map(ingKey => {
    return[...Array()props.ingredients[igKey]].map((_, i)=>{
      <BurgerIngredient key={igKey+i} type={igKey} />
    })
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

export default burger;
