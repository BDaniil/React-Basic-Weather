import WeekDay from "./WeekDay";

import "../styles/WeatherDayCard.css";

interface WeatherProps {
  dayOrder: number;
  region: any ;
}

const WeatherDayCard: React.FC<WeatherProps> = ({
  region,
  dayOrder,
}): JSX.Element => {
  
  function getIcon(iconId: string) {
    return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  }
  
  return region ? (
    <div className="WeatherDayCard">
      {region ? (
        <div className="date">
          <h1>
            <WeekDay order={dayOrder} />
          </h1>
          <p>{region?.dt_txt.split(" ")[0].split("2022-")}</p>

          <div className="image">
            <img src={getIcon(region?.weather[0].icon)} alt="" />
          </div>

          <div className="temp">
            <h1>{region.main.temp.toFixed()}°F</h1>
          </div>

          <div className="description">
            <p>{region.weather[0].description}</p>
          </div>
        </div>
      ) : null}
    </div>
  ) : (
    <></>
  );
};

export default WeatherDayCard;
