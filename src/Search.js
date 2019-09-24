import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import FoodDatabase from './FoodDatabase';

function Search(props){
  const [currentSearch, setCurrentSearch] = useState('');


  return(
    <div className="searchArea">
      <SearchBar currentSearch={currentSearch} updateSearch={(update) => setCurrentSearch(update)}/>
      <FoodDatabase search={currentSearch} meal={props.meal} addFood={(item) => {
        //console.log("In here");
        //console.log(props.meal);
        return props.setLog[props.activeSearch](props.meal[props.activeSearch].concat([item]));
      }}/>
    </div>
  );
}


export default Search;
