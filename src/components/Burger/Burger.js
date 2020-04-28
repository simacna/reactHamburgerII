import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  return(
    <div className={'Burger'}>
      {/* everything below is hard coded and not being dynamically rendered by state */}
      <BurgerIngredient type="bread-top"/>
      <BurgerIngredient type="salad"/>
      <BurgerIngredient type="cheese"/>
      <BurgerIngredient type="meat"/>
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
