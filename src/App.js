import React, { useState, useEffect} from 'react';
import './App.scss';

function MealList(props){
  const items = props.meals;
  console.log(items);
  const listItems = items.map((item, index) => {
    return(
      <li key={index}>{item["name"]}</li>
    )
  });


  return (
    <div className={props.mealName.toLowerCase()+"List"}>
      <h3>{props.mealName}</h3>
      <ul>{listItems}</ul>
    </div>
  );
}

function LogList(props){
  return(
    <div className="loglist">
      <MealList mealName="Breakfast" meals={props.meals["breakfast"]} />
      <MealList mealName="Lunch" meals={props.meals["lunch"]} />
    </div>
  );


}

function App() {

  const [log, setLog] = useState(null);

  useEffect(() => {
    var data = require('./userLog.json');
    setLog(data["log"]);
  }, []);

  if(log === null){
    return(null);
  } else {
    return (
      <div className="App">
        <h1>{log[0]["date"]}</h1>
        <LogList meals={log[0]}/>
      </div>
    );
  }


}

export default App;
