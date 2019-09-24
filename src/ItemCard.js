import React from 'react';


function ItemCard(props){

  return(
  <div className="itemCard" onClick={() => props.actionCall(props.item)}>
    <div className="main">
    <p>{props.item["name"]}</p>
    </div>
  </div>
  );
}


export default ItemCard;
