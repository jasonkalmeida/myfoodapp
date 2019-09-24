import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

function FoodDatabase(props){

  //searchResults stores the immediate response of the db
  const [searchResults, setSearchResults] = useState([]);
  //foodItems stores the rendered versions of searchResults
  const [foodItems, setFoodItems] = useState([]);


  //This is the primitive frontend search I created to filter through the dummy data
  function filterSearch(item){

    var ret = false;

    item["name"].split(" ").forEach((word) => {
      if(word.toLowerCase().indexOf(props.search.toLowerCase()) === 0){
        ret = true;
      }
    });
    item["source"].split(" ").forEach((word) => {
      if(word.toLowerCase().indexOf(props.search.toLowerCase()) === 0){
        ret = true;
      }
    });

    return (ret);
  }


  //This would be ths section where I make API search calls
  useEffect(() => {
      let res = require('./foodDB.json');
      setSearchResults(res["items"]);
  }, [props.search]);

  //This is to re-render the list of items and their props as needed
  useEffect(() => {
    setFoodItems(searchResults.filter(filterSearch).map((item, index) =>
      <li key={index}><ItemCard item={item} expanded={false} actionCall={(item) => props.addFood(item)}/></li>
    ));
  }, [props.search, searchResults, props.meal])



  if(props.search === ''){
    return null;
  } else {
    return(
      <ul>{foodItems}</ul>
    );
  }

}


export default FoodDatabase;
