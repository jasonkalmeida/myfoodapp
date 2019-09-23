import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

function FoodDatabase(props){

  const [searchedFood, setSearchedFood] = useState([]);

  function filterSearch(item){
    return (item["name"].toLowerCase().indexOf(props.search.toLowerCase()) === 0 || item["source"].toLowerCase().indexOf(props.search.toLowerCase()) === 0)
  }

  function handleClick(item){
    //console.log(`Adding ${item}`);
    //console.log(item);
    console.log("test deep")
    console.log(props.meal);
    props.addFood(item);
  }

  useEffect(() => {
      //This would be ths section where I make API search calls
      let res = require('./foodDB.json');
      let food = res["items"];
      setSearchedFood(food.filter(filterSearch).map((item, index) =>
        <li key={index}><ItemCard item={item} expanded={false} handleClick={(item) => handleClick(item)}/></li>
      ));

  }, [props.search]);


  if(props.search === ''){
    return null;
  } else {
    return(
      <ul>{searchedFood}</ul>
    );
  }

}


export default FoodDatabase;
