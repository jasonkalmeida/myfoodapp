import React from 'react';
import ItemCard from './ItemCard';


function MealList(props){

  function handleClick(index){
    //console.log("A clicked item is being added to " + index);
    let update = props.meals.slice();
    update.splice(0, 1);
    props.updateMeal(update);
  }


  const items = props.meals;
  //console.log(items);
  const listItems = items.map((item, index) => {
    return(
      <li key={index}><ItemCard item={item} expanded={false} handleClick={(item) => handleClick(index)}/></li>
    )
  });


  return (
    <div className={props.mealName+"List"}>
      <h3>{props.mealName}</h3>
      <ul>{listItems}
      <li onClick={() => props.setActiveSearch(props.mealName)}>Add item</li>
      </ul>

    </div>
  );
}

function LogList(props){
  return(
    <div className="loglist">
      <h1>{props.date}</h1>
      <h2>{props.calories}</h2>
      <MealList mealName="breakfast" meals={props.meals["breakfast"]} updateMeal={(update) => props.setLog["breakfast"](update)} setActiveSearch={(update) => props.setActiveSearch(update)}/>
      <MealList mealName="lunch" meals={props.meals["lunch"]} updateMeal={(update) => props.setLog["lunch"](update)} setActiveSearch={(update) => props.setActiveSearch(update)}/>
    </div>
  );
}

export default LogList;
