import WeatherDayCard from "./WeatherDayCard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

import "../styles/WeatherContainer.css";

export default function WeatherContainer() {
  const [weather, setWeather] = useState<any>();
  const [location, setLocation] = useState<string>("London");

  const inputEl = useRef<any>(null);

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=03e44ee28287d44cd0b91fa6eceb3b43`;

  async function getWeather(url: string) {
    const weatherData = await axios.get(url);
    return weatherData;
  }

  const onKeyDownHandler = (e: { key: string }) => {
    if (e.key === "Enter") {
      setLocation(inputEl.current.value);
      inputEl.current.value = "";
    }
  };

  const weatherDays = weather?.data?.list.filter(
    (hours: number, index: number) => {
      if (index % 8 === 0) {
        return hours;
      }
    }
  );

  useEffect(() => {
    getWeather(url).then((data: any) => setWeather(data));
  }, [location]);

  return (
    <div className="WeatherContainer">
      <div className="input-container">
        <input ref={inputEl} onKeyDown={onKeyDownHandler} className="place" />
      </div>
      <div className="location">{location.toUpperCase()}</div>
      <div className="container">
        {weatherDays &&
          weatherDays.map((el: any, index: number) => (
            <WeatherDayCard key={el.dt} dayOrder={index} region={el} />
          ))}
      </div>
    </div>
  );
}
