import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div>
      <Button variant="primary">현재 위치</Button>
      <Button variant="primary">베이징</Button>
      <Button variant="primary">벤쿠버</Button>
    </div>
  );
};

export default WeatherButton;
