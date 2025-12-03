import { useState } from "react";
import InfoBox from "./InfoBox";
import Searchbox from "./Searchbox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <Searchbox updateInfo={setWeatherInfo} />

      {weatherInfo && <InfoBox info={weatherInfo} />}
    </div>
  );
}
