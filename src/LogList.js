import React from 'react';
import ItemCard from './ItemCard';
import MealList from './MealList';
import './LogList.scss';

function LogList(props){
  return(
    <div className="loglist">
      <h1>{props.date}</h1>
      <h2>{props.calories}</h2>

      <div className="mealsSection">
      <MealList mealName="breakfast" meal={props.meals["breakfast"]} updateMeal={(update) => props.setLog["breakfast"](update)}/>
      <MealList mealName="lunch" meal={props.meals["lunch"]} updateMeal={(update) => props.setLog["lunch"](update)}/>
      <MealList mealName="dinner" meal={props.meals["dinner"]} updateMeal={(update) => props.setLog["dinner"](update)}/>
      </div>

    </div>
  );
}

export default LogList;
