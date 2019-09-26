import React from 'react';
import './styles/ItemCard.scss'

//Highly re-usable component to display any food item in this application
function ItemCard(props){

  //Toggles the nutrition info for the item card
  function expandCard(e){
    e.currentTarget.classList.toggle("active");
    var content = e.currentTarget.nextElementSibling
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = (content.scrollHeight * 1.10) + "px";
    }
  }

  return(
  <div className="itemCard">
    <div className="mainCard" onClick={(event) => expandCard(event)}>
      <div className="cardTitle">
        <h3>{props.item["name"]}</h3>
        <p className="subText">{props.item["source"]}</p>
      </div>
      <div className="cardCals">
        <p className="itemCal">{props.item["nutrition"]["calories"]}</p>
        <p className="subText">Calories</p>
      </div>
    </div>
    <div className="subCard">
      <div className="nutritionSection">
        <p>Total Fat: <span className="nutData">{props.item["nutrition"]["totalFat"] + " g"}</span></p>
        <p>Cholesterol: <span className="nutData">{props.item["nutrition"]["cholesterol"] + " mg"}</span></p>
        <p>Sodium: <span className="nutData">{props.item["nutrition"]["sodium"] + " mg"}</span></p>
        <p>Potasium: <span className="nutData">{props.item["nutrition"]["potasium"] + " mg"}</span></p>
        <p>Carbs: <span className="nutData">{props.item["nutrition"]["carbs"] + " g"}</span></p>
        <p>Fiber: <span className="nutData">{props.item["nutrition"]["fiber"] + " g"}</span></p>
        <p>Sugars: <span className="nutData">{props.item["nutrition"]["sugars"] + " g"}</span></p>
        <p>Protein: <span className="nutData">{props.item["nutrition"]["protein"] + " g"}</span></p>
        <p>Vitamin A: <span className="nutData">{props.item["nutrition"]["vita"] + "%"}</span></p>
        <p>Vitamin C: <span className="nutData">{props.item["nutrition"]["vitc"] + "%"}</span></p>
        <p>Calium: <span className="nutData">{props.item["nutrition"]["calcium"] + "%"}</span></p>
        <p>Iron: <span className="nutData">{props.item["nutrition"]["iron"] + "%"}</span></p>
      </div>

      { props.actionLabel &&
          <div className="cardAction" onClick={() => props.actionCall(props.item)}><p className={props.actionStyle}>{props.actionLabel}</p></div>
      }
    </div>
  </div>
  );
}


export default ItemCard;
