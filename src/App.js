import React, { useState, useEffect} from 'react';
import LogList from './LogList';
import Search from './Search';
import './styles/App.scss';


function App() {

  //State used to fake data/server reqs
  const [logInd, setLogInd] = useState(0);
  const [totalLogs, setTotalLogs] = useState(null);

  //Application's overall state
  const [date, setDate] = useState(null);
  const [calories, setCalories] = useState(null);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [nutrition, setNutrition] = useState({});

  //Setting the data/server states
  useEffect(() => {
    var input = require('./data/userLog.json');
    setTotalLogs(input["logs"].length);
  }, []);

  //Used to application state when user switches to a different day's log
  useEffect(() => {
    var input = require('./data/userLog.json');
    var data = input["logs"][logInd];
    setDate(data["date"]);
    setCalories(data["calories"]);
    setBreakfast(data["breakfast"]);
    setLunch(data["lunch"]);
    setDinner(data["dinner"]);

  }, [logInd]);



  //When meals are updated, update the calorie count and push updates to DB
  useEffect(() => {
    let sum = 0;
    var nutri = {
      "totalFat": 0,
      "cholesterol": 0,
      "sodium": 0,
      "potasium": 0,
      "carbs": 0,
      "fiber": 0,
      "sugars": 0,
      "protein": 0,
      "vita": 0,
      "vitc": 0,
      "calcium": 0,
      "iron": 0
    }

    breakfast.forEach((item) => {
      sum+=item["nutrition"]["calories"];

      for(var key in nutri){
        nutri[key] += item["nutrition"][key];
      }
    })
    lunch.forEach((item) => {
      sum+=item["nutrition"]["calories"];
      for(var key in nutri){
        nutri[key] += item["nutrition"][key];
      }
    })
    dinner.forEach((item) => {
      sum+=item["nutrition"]["calories"];
      for(var key in nutri){
        nutri[key] += item["nutrition"][key];
      }
    })

    setNutrition(nutri);
    setCalories(sum);

    //Would make POST request here to update user's log in DB
  }, [breakfast, lunch, dinner]);

  if(date === null){
    return(null);
  } else {
    return (
      <div className="App">

        <h3 id="appTitle">MyFoodDiary</h3>
        <p id="titleSubtext">for</p>

        <LogList
        meals={{
          "breakfast": breakfast,
          "lunch": lunch,
          "dinner": dinner
        }}
        date={date}
        calories={calories}
        setLog={{
          "breakfast": (update) => setBreakfast(update),
          "lunch": (update) => setLunch(update),
          "dinner": (update) => setDinner(update)
        }}
        nutrition={nutrition}
        logInd={logInd}
        changeLog={(update) => setLogInd(update)}
        totalLogs={totalLogs}
        />


      </div>
    );
  }
}

export default App;
