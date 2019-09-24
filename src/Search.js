import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import FoodDatabase from './FoodDatabase';

function Search(props){

  //Stores the current search query - updated upon keystroke
  const [currentSearch, setCurrentSearch] = useState('');


  return(
    <div className="searchArea">
      <SearchBar currentSearch={currentSearch} updateSearch={(update) => setCurrentSearch(update)}/>
      <FoodDatabase search={currentSearch} meal={props.meal} addFood={(item) => props.setLog(item)}/>
    </div>
  );
}


export default Search;
