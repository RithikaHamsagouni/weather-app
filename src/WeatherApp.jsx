import { useState } from "react";
import InfoBox from "./InfoBox";
import Searchbox from "./Searchbox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>

      {/* send both updateInfo and setLoading */}
      <Searchbox updateInfo={setWeatherInfo} setLoading={setLoading} />

      {loading && <p style={{ fontSize: "20px" }}>⏳ Loading...</p>}

      {/* only show results when NOT loading */}
      {!loading && weatherInfo && <InfoBox info={weatherInfo} />}
    </div>
  );
}
