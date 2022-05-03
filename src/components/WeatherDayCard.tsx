import { useState, useEffect } from "react";
import axios from "axios";
import WeekDay from "./WeekDay";

import "../styles/WeatherDayCard.css";

export default function WeatherDayCard(props: any) {
  const [data, setData] = useState(Object);
  let location = props.region;

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=03e44ee28287d44cd0b91fa6eceb3b43`;
  const n = 1;
  let value;

  if (props.dayOrder === 1) {
    value = 0;
  } else {
    value = (props.dayOrder - n) * 8;
  }

  const rain = "Rain";
  const cloud = "Clouds";

  useEffect(() => {
    axios.get(url).then(response => {
      setData(response.data);
    });
  }, []);

  return props.region ? (
    <div className="WeatherDayCard">
      {data.list ? (
        <div className="date">
          <h1>
            <WeekDay order={props.dayOrder} />
          </h1>
          <p>{data.list[value].dt_txt.split(" ")[0].split("2022-")}</p>

          <div className="image">
            <img
              src={require(data.list[value].weather[0].main === rain
                ? "../images/rain.png"
                : data.list[value].weather[0].main === cloud
                ? "../images/cloud.jpg"
                : Number(
                    data.list[value].dt_txt.substr(11).replace(/:00:00/g, "")
                  ) >= 6 &&
                  Number(
                    data.list[value].dt_txt.substr(11).replace(/:00:00/g, "")
                  ) <= 21
                ? "../images/sun.png"
                : "../images/moon.png")}
              alt=""
            />
          </div>

          <div className="temp">
            <h1>{data.list[value].main.temp.toFixed()}°F</h1>
          </div>

          <div className="description">
            <p>{data.list[value].weather[0].description}</p>
          </div>
        </div>
      ) : null}
    </div>
  ) : null;
}
