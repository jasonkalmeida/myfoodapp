import React from 'react';


function SearchBar(props){
  return(
    <div className="searchBar">
      <input className="searchInput" type="text" value={props.currentSearch} onChange={(event) => props.updateSearch(event.target.value)} placeholder="Add Food..."></input>
    </div>
  )

}


export default SearchBar;
