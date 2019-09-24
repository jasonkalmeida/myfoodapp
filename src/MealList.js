import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import Search from './Search';

function MealList(props){

  const [activeSearch, setActiveSearch] = useState(false);

  //Function to remove a food item to a meal list
  function removeMeal(index){
    let update = props.meal.slice();
    update.splice(index, 1);
    props.updateMeal(update);
  }

  //Function to add a food item to a meal list
  function addMeal(item){
    let update = props.meal.concat([item]);
    props.updateMeal(update);
  }


  //Renders meal item cards
  const items = props.meal;
  const listItems = items.map((item, index) => {
    return(
      <div key={index}><ItemCard item={item} expanded={false} actionCall={(item) => removeMeal(index)} actionLabel="REMOVE"/></div>
    )
  });


  return (
    <div className={props.mealName+"List"}>
      <h2>{props.mealName}</h2>
      <div>{listItems}
      <div className="searchControl" onClick={() => setActiveSearch(!activeSearch)}>{(activeSearch) ? "x" : "+"}</div>
      </div>
      {
        activeSearch &&
        <Search meal={props.meal} setLog={(item) => addMeal(item)}/>
      }
    </div>
  );
}

export default MealList;
