import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";

function App() {
  const [weather, setWeather] = useState(null);
  const [cities, setCities] = useState([
    "Vancouver",
    "New York",
    "Phoenix",
    "Tokyo",
  ]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const api_key = "30b9e76a0fd825983daaf8d19191338a";

  const getCurrentLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeatherCurrentLocation(lat, lon);
      },
      (error) => {
        console.error("Error getting location: ", error);
        setLoading(false);
      }
    );
  };

  const getWeatherCurrentLocation = async (lat, lon) => {
    try {
      const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
      const response = await fetch(api_url);
      const data = await response.json();

      // 최소 1초 동안 로딩 상태 유지
      setTimeout(() => {
        setWeather(data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("날씨 데이터를 가져오는 중 오류 발생:", error);
      setLoading(false);
    }
  };

  async function getWeatherbyCity(city) {
    try {
      setLoading(true);
      const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
      const response = await fetch(api_url);
      const data = await response.json();

      // 최소 1초 동안 로딩 상태 유지
      setTimeout(() => {
        setWeather(data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("도시 날씨 데이터를 가져오는 중 오류 발생:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherbyCity(city);
    }
  }, [city]);

  //  ----------여기서부터 Return -------

  return (
    <>
      <div className="container">
        <WeatherBox weather={!loading && weather} />
        <WeatherButton cities={cities} setCity={setCity} />
      </div>
    </>
  );
}

export default App;
