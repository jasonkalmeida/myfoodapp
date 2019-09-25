import React from 'react';
import ItemCard from './ItemCard';
import MealList from './MealList';
import './styles/LogList.scss';

function LogList(props){
  return(
    <div className="loglist">
      <h3>MyFoodDiary</h3>
      <p>for</p>
      <h1>{props.date}</h1>
      <h2>{"2000 - " + props.calories + " = " + (2000-props.calories)}</h2>

      <div className="mealsSection">
      <MealList mealName="breakfast" meal={props.meals["breakfast"]} updateMeal={(update) => props.setLog["breakfast"](update)}/>
      <MealList mealName="lunch" meal={props.meals["lunch"]} updateMeal={(update) => props.setLog["lunch"](update)}/>
      <MealList mealName="dinner" meal={props.meals["dinner"]} updateMeal={(update) => props.setLog["dinner"](update)}/>
      </div>

    </div>
  );
}

export default LogList;
