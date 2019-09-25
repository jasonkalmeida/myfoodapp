import React, { useState } from 'react';
import './styles/CreateCard.scss';
import './styles/ItemCard.scss';


function CreateCard(props){

  const [calories, setCalories] = useState('');
  const [totalFat, setTotalFat] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [sodium, setSodium] = useState('');
  const [potasium, setPotasium] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fiber, setFiber] = useState('');
  const [sugars, setSugar] = useState('');
  const [protein, setProtein] = useState('');
  const [vita, setVita] = useState('');
  const [vitc, setVitc] = useState('');
  const [calcium, setCalcium] = useState('');
  const [iron, setIron] = useState('');


  function expandCard(e){
    //console.log(e.currentTarget.nextElementSibling);
    e.currentTarget.classList.toggle("active");
    var content = e.currentTarget.nextElementSibling
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  function addNewItem(){
    var newItem = {
      "name": props.search.charAt(0).toUpperCase() + props.search.substring(1).toLowerCase(),
      "source": "User Create",
      "nutrition": {
        "calories": calories !== '' ? parseInt(calories) : 0,
        "totalFat": totalFat !== '' ? parseInt(totalFat) : 0,
        "cholesterol": cholesterol !== '' ? parseInt(cholesterol) : 0,
        "sodium": sodium !== '' ? parseInt(sodium) : 0,
        "potasium": potasium !== '' ? parseInt(potasium) : 0,
        "carbs": carbs !== '' ? parseInt(carbs) : 0,
        "fiber": fiber !== '' ? parseInt(fiber) : 0,
        "sugars": sugars !== '' ? parseInt(sugars) : 0,
        "protein": protein !== '' ? parseInt(protein) : 0,
        "vita": vita !== '' ? parseInt(vita) : 0,
        "vitc": vitc !== '' ? parseInt(vitc) : 0,
        "calcium": calcium !== '' ? parseInt(calcium) : 0,
        "iron": iron !== '' ? parseInt(iron) : 0
      }

    }
    props.actionCall(newItem)
  }

  return(
  <div className="createCard" /*onClick={() => props.actionCall(props.item)}*/>
    <div className="mainCard" onClick={(event) => expandCard(event)}>
      <p>Create "{props.search.charAt(0).toUpperCase() + props.search.substring(1).toLowerCase()}"</p>
    </div>
    <div className="subCard">

        <input className="createInput" type="text" value={props.search} onChange={(event) => props.updateSearch(event.target.value)} placeholder="Name..."></input>
        <input className="createInput" type="text" value={calories} onChange={(event) => setCalories(event.target.value)} placeholder="Calories..."></input>
        <input className="createInput" type="text" value={totalFat} onChange={(event) => setTotalFat(event.target.value)} placeholder="Total Fat (g)..."></input>
        <input className="createInput" type="text" value={cholesterol} onChange={(event) => setCholesterol(event.target.value)} placeholder="Cholesterol (mg)..."></input>
        <input className="createInput" type="text" value={sodium} onChange={(event) => setSodium(event.target.value)} placeholder="Sodium (mg)..."></input>
        <input className="createInput" type="text" value={potasium} onChange={(event) => setPotasium(event.target.value)} placeholder="Potasium (mg)..."></input>
        <input className="createInput" type="text" value={carbs} onChange={(event) => setCarbs(event.target.value)} placeholder="Carbs (g)..."></input>
        <input className="createInput" type="text" value={fiber} onChange={(event) => setFiber(event.target.value)} placeholder="Fiber (g)..."></input>
        <input className="createInput" type="text" value={sugars} onChange={(event) => setSugar(event.target.value)} placeholder="Sugar (g)..."></input>
        <input className="createInput" type="text" value={protein} onChange={(event) => setProtein(event.target.value)} placeholder="Protein (g)..."></input>
        <input className="createInput" type="text" value={vita} onChange={(event) => setVita(event.target.value)} placeholder="Vitamin A (%)..."></input>
        <input className="createInput" type="text" value={vitc} onChange={(event) => setVitc(event.target.value)} placeholder="Vitamin C (%)..."></input>
        <input className="createInput" type="text" value={calcium} onChange={(event) => setCalcium(event.target.value)} placeholder="Calcium (%)..."></input>
        <input className="createInput" type="text" value={iron} onChange={(event) => setIron(event.target.value)} placeholder="Iron (%)..."></input>

        { props.actionLabel &&
            <div className="cardAction" onClick={() => props.actionCall(props.item)}><p className={props.actionStyle}>{props.actionLabel}</p></div>
        }
    </div>
  </div>
  );
}


export default CreateCard;
