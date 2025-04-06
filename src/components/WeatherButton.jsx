import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div className="weather-button-group">
      <Button
        variant="primary"
        className="me-2 mb-2"
        onClick={() => setCity("")}
      >
        현재 위치
      </Button>
      {cities.map((city, index) => (
        <Button
          variant="primary"
          className="me-2 mb-2"
          key={index}
          onClick={() => setCity(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
