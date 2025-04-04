import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";

function App() {

  const getCurrentLocation = () => {
    // console.log("getCurrentLocation");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // console.log("Latitude: " + lat + ", Longitude: " + lon);
        getWeatherCurrentLocation(lat, lon);
        // Use the lat and lon to fetch weather data
      },
      (error) => {
        console.error("Error getting location: ", error);
      }
    );
  };
  
  const api_key = "30b9e76a0fd825983daaf8d19191338a";
  
  const getWeatherCurrentLocation = async (lat, lon) => {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await fetch(api_url);
    const data = await response.json();
  
    setWeather(data);
  };

  const [weather, setWeather] = useState(null);
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton />
      </div>
    </>
  );
}

export default App;
