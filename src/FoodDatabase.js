import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import CreateCard from './CreateCard';

function FoodDatabase(props){

  //searchResults stores the immediate response of the "db"
  const [searchResults, setSearchResults] = useState([]);
  //foodItems stores the rendered versions of searchResults
  const [foodItems, setFoodItems] = useState([]);


  //This is the primitive frontend search I created to filter through the dummy data
  function filterSearch(item){

    var ret = false;

    if(item["name"].toLowerCase().indexOf(props.search.toLowerCase()) === 0 || (item["name"].toLowerCase().indexOf(props.search.toLowerCase()) >= 0 && item["name"].charAt(item["name"].toLowerCase().indexOf(props.search.toLowerCase())-1) === " ")){
      ret = true;
    }

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
      let res = require('./data/foodDB.json');
      setSearchResults(res["items"]);
  }, [props.search]);

  //This is to re-render the list of items and their props as needed
  useEffect(() => {
    setFoodItems(searchResults.filter(filterSearch).map((item, index) =>
      <div key={index}><ItemCard item={item} expanded={false} actionStyle="add" actionCall={(item) => props.addFood(item)} actionLabel="ADD"/></div>
    ));
  }, [props.search, searchResults, props.meal])



  if(props.search === ''){
    return null;
  } else {
    return(
      <div>{foodItems}
      <div><CreateCard search={props.search} actionStyle="add" actionCall={(item) => props.addFood(item)} actionLabel="ADD NEW ITEM" updateSearch={(value) => props.updateSearch(value)}/></div>
      </div>
    );
  }

}


export default FoodDatabase;
