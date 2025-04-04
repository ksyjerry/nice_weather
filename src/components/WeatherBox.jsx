import React from "react";

const WeatherBox = ({ weather }) => {
  console.log(weather);
  return (
    <div className="weather-box">
      <div>{weather &&weather.name}</div>
      <div>섭씨 {weather && Math.floor(weather.main.temp)}도 / 화씨 {weather && Math.floor(weather.main.temp * 1.8 + 32)}도</div>
      <div>{weather && weather.weather[0].description}</div>
    </div>
  );
};

export default WeatherBox;
