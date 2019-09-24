import React from 'react';
import './ItemCard.scss'


function ItemCard(props){

  function expandCard(e){
    //console.log(e.currentTarget.nextElementSibling);
    e.currentTarget.classList.toggle("active");
    var content = e.currentTarget.nextElementSibling
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 250 + "px";
    }
  }

  return(
  <div className="itemCard" /*onClick={() => props.actionCall(props.item)}*/>
    <div className="mainCard" onClick={(event) => expandCard(event)}>
      <p>{props.item["name"]}</p>
    </div>
    <div className="subCard">
      <p>Total Fat: {props.item["nutrition"]["totalFat"]}</p>
      <p>Cholesterol: {props.item["nutrition"]["cholesterol"]}</p>
      <p>Sodium: {props.item["nutrition"]["sodium"]}</p>
      <p>Potasium: {props.item["nutrition"]["potasium"]}</p>
      <p>Carbs: {props.item["nutrition"]["carbs"]}</p>
      <p>Fiber: {props.item["nutrition"]["fiber"]}</p>
      <p>Sugars: {props.item["nutrition"]["sugars"]}</p>
      <p>Protein: {props.item["nutrition"]["protein"]}</p>
      <p>Vitamin A: {props.item["nutrition"]["vita"]}</p>
      <p>Vitamin C: {props.item["nutrition"]["vitc"]}</p>
      <p>Calium: {props.item["nutrition"]["calcium"]}</p>
      <p>Iron: {props.item["nutrition"]["iron"]}</p>

      <div className="addCard" onClick={() => props.actionCall(props.item)}><p>{props.actionLabel}</p></div>
    </div>
  </div>
  );
}


export default ItemCard;
