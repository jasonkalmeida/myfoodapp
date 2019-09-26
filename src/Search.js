import React, { useState } from 'react';
import SearchBar from './SearchBar';
import FoodDatabase from './FoodDatabase';
import './styles/search.scss'

function Search(props){

  //Stores the current search query - updated upon keystroke
  const [currentSearch, setCurrentSearch] = useState('');


  return(
    <div className="searchArea">
      <div className="arrow-up"></div>
      <SearchBar currentSearch={currentSearch} updateSearch={(update) => setCurrentSearch(update)}/>
      <FoodDatabase search={currentSearch} meal={props.meal} addFood={(item) => props.setLog(item)} updateSearch={(update) => setCurrentSearch(update)}/>
    </div>
  );
}


export default Search;
