import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

function FoodDatabase(props){

  const [searchResults, setSearchResults] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  console.log("Rendered fooddb");
  console.log(props.meal)

  function filterSearch(item){
    return (item["name"].toLowerCase().indexOf(props.search.toLowerCase()) === 0 || item["source"].toLowerCase().indexOf(props.search.toLowerCase()) === 0)
  }

  function handleClick(item){
    //console.log(`Adding ${item}`);
    //console.log(item);
    //console.log("test deep")
    //console.log(props.meal);
    props.addFood(item);
  }

  useEffect(() => {
      //This would be ths section where I make API search calls
      let res = require('./foodDB.json');
      setSearchResults(res["items"]);
  }, [props.search]);

  useEffect(() => {
    //console.log(searchResults.filter(filterSearch));
    setFoodItems(searchResults.filter(filterSearch).map((item, index) =>
      <li key={index}><ItemCard item={item} expanded={false} handleClick={(item) => {
        handleClick(item);
        //console.log(props.meal);
      }}/></li>
    ));

  }, [props.search, searchResults, props.meal])

  //Only updates when props.search is updated


  if(props.search === ''){
    return null;
  } else {
    return(
      <ul>{foodItems}</ul>
    );
  }

}


export default FoodDatabase;
