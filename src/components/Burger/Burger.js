import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
  //transfer objct to key/value pairs below
  console.log('props in burger.js', props);
  //transofmredingredients will always be an array, we can reduce it in order to see if it's empty or not 
  let transformedIngredients = Object.keys(props.ingredients)
  // .map(ingKey => {
  //   return([...Array(props.ingredients[ingKey])]).map((_, i)=>{
  //     // console.log('ingKey', ingKey);
  //    return (<BurgerIngredient key={ingKey+i} type={ingKey} />)
  //   });
  // }); //extracts keys of given object, gives us an array of keys

  // let transformedIngridients = Object.keys(props.ingredients)  //converting an object into array
    .map(ingKey => {
        return [...Array(props.ingredients[ingKey])] // an array with two elements
        .map((_, i) => {
            return (<BurgerIngredient key={ingKey+i} type={ingKey} />)
        })
    }) //below, arr is the always updated root array and we're flattening the array
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    if (transformedIngredients.length == 0){
      transformedIngredients = <p> please start adding ingredients</p>
    }
  console.log(transformedIngredients);
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
