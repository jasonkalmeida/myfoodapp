import React, { useState, useEffect} from 'react';
import LogList from './LogList';
import Search from './Search';
import './App.scss';


function App() {

  const [date, setDate] = useState(null);
  const [calories, setCalories] = useState(null);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);

  useEffect(() => {
    var data = require('./userLog.json');
    setDate(data["date"]);
    setCalories(data["calories"]);
    setBreakfast(data["breakfast"]);
    setLunch(data["lunch"]);
    setDinner(data["dinner"]);
  }, []);

  useEffect(() => {
    let sum = 0;
    breakfast.forEach((item) => {
      sum+=item["nutrition"]["calories"];
    })
    lunch.forEach((item) => {
      sum+=item["nutrition"]["calories"];
    })
    dinner.forEach((item) => {
      sum+=item["nutrition"]["calories"];
    })

    setCalories(sum);
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
        }}/>

        <Search meal={breakfast} setLog={(update) => setBreakfast(update)}/>

      </div>
    );
  }
}

export default App;
