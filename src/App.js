import React, { useState, useEffect} from 'react';
import LogList from './LogList';
import Search from './Search';
import './styles/App.scss';


function App() {

  //Application's overall state
  const [date, setDate] = useState(null);
  const [calories, setCalories] = useState(null);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);

  //Setting logged in state
  useEffect(() => {
    var data = require('./data/userLog.json');
    setDate(data["date"]);
    setCalories(data["calories"]);
    setBreakfast(data["breakfast"]);
    setLunch(data["lunch"]);
    setDinner(data["dinner"]);
  }, []);

  //When meals are updated, update the calorie count and push updates to DB
  useEffect(() => {
    let sum = 0;
    breakfast.forEach((item) => {
      sum+=item["nutrition"]["calories"];
      console.log(item["name"]);
      console.log(item["nutrition"]["calories"]);
    })
    lunch.forEach((item) => {
      sum+=item["nutrition"]["calories"];
    })
    dinner.forEach((item) => {
      sum+=item["nutrition"]["calories"];
    })

    setCalories(sum);
    //Would make POST request here to update user's log in DB
  }, [breakfast, lunch, dinner]);

  if(date === null){
    return(null);
  } else {
    return (
      <div className="App">

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
        />


      </div>
    );
  }
}

export default App;
