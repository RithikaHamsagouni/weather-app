import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Searchbox.css";
import { useState } from "react";

export default function Searchbox({ updateInfo, setLoading }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "931f821ae64017fcc1e17081a1bb2535"; // <-- must fill

  const getWeatherInfo = async () => {
    try {
      setLoading(true);

      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let jsonResponse = await response.json();

      // API error handling
      if (jsonResponse.cod !== 200) {
        alert("City not found!");
        setLoading(false);
        return;
      }

      let result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        icon: jsonResponse.weather[0].icon, // keeps image
      };

      updateInfo(result);
    } catch (err) {
      alert("Error fetching weather!");
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    getWeatherInfo();
    setCity("");
  };

  return (
    <div className="Searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
