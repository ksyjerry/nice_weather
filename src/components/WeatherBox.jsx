import React from "react";
import { Spinner } from "react-bootstrap";

const WeatherBox = ({ weather }) => {
  return (
    <div className="weather-box">
      {weather ? (
        <>
          <div className="weather-city">{weather.name}</div>
          <div className="weather-temp">
            섭씨 {Math.floor(weather.main.temp)}도 / 화씨{" "}
            {Math.floor(weather.main.temp * 1.8 + 32)}도
          </div>
          <div className="weather-desc">{weather.weather[0].description}</div>
        </>
      ) : (
        <div className="loading-container">
          <Spinner animation="border" variant="primary" />
          <div className="loading-text mt-3">날씨 정보를 불러오는 중...</div>
        </div>
      )}
    </div>
  );
};

export default WeatherBox;
