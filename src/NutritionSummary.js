import React from 'react';
import './styles/NutritionSummary.scss';

function NutritionSummary(props){

  //Used to toggle-slide the Nutritition Summary section
  function expandSummary(e){
    e.currentTarget.classList.toggle("active");
    var content = e.currentTarget.nextElementSibling
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.classList.toggle("active");
    } else {
      content.style.maxHeight = (content.scrollHeight * 1.10) + "px";
      content.classList.toggle("active");
    }
  }

  return(
    <div className="nutritionSummary">
      <h2 className="nutritionTitle" onClick={(event) => expandSummary(event)}>Nutrition Summary</h2>
      <div className="collapsableSummary">

        <div className="arrow-up"></div>

        <h2>2000<span className="calSub"> GOAL</span> - {props.calories}<span className="calSub"> CONSUMED TODAY</span> = <span className="resultCal">{2000-props.calories}<span className="calSub"> REMAINING CALORIES</span></span></h2>


        <div className="nutritionDetails">
          <p>Total Fat: <span className="nutData">{props.nutrition["totalFat"] + " g"}</span></p>
          <br></br>
          <p>Cholesterol: <span className="nutData">{props.nutrition["cholesterol"] + " mg"}</span></p>
          <br></br>
          <p>Sodium: <span className="nutData">{props.nutrition["sodium"] + " mg"}</span></p>
          <br></br>
          <p>Potasium: <span className="nutData">{props.nutrition["potasium"] + " mg"}</span></p>
          <br></br>
          <p>Carbs: <span className="nutData">{props.nutrition["carbs"] + " g"}</span></p>
          <br></br>
          <p>Fiber: <span className="nutData">{props.nutrition["fiber"] + " g"}</span></p>
          <br></br>
          <p>Sugars: <span className="nutData">{props.nutrition["sugars"] + " g"}</span></p>
          <br></br>
          <p>Protein: <span className="nutData">{props.nutrition["protein"] + " g"}</span></p>
          <br></br>
          <p>Vitamin A: <span className="nutData">{props.nutrition["vita"] + "%"}</span></p>
          <br></br>
          <p>Vitamin C: <span className="nutData">{props.nutrition["vitc"] + "%"}</span></p>
          <br></br>
          <p>Calium: <span className="nutData">{props.nutrition["calcium"] + "%"}</span></p>
          <br></br>
          <p>Iron: <span className="nutData">{props.nutrition["iron"] + "%"}</span></p>
        </div>
      </div>
    </div>
  )
}

export default NutritionSummary;
