import WeatherDayCard from "./WeatherDayCard";

import "../styles/WeatherContainer.css";

let region = prompt("Choose city");

export default function WeatherContainer() {

  return (
    
    <div className="WeatherContainer">
      <div className="place">{region}</div>
      <div className="container">
        
        <WeatherDayCard dayOrder={1} region={region}/>
        <WeatherDayCard dayOrder={2} region={region}/>
        <WeatherDayCard dayOrder={3} region={region}/>
        <WeatherDayCard dayOrder={4} region={region}/>
        <WeatherDayCard dayOrder={5} region={region}/>
      </div>
    </div>
  );
}
