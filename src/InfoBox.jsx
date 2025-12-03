import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=1000&auto=format&fit=crop&q=60";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={INIT_URL} />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {info.city}
            </Typography>

            <div>Temperature: {info.temp}°C</div>
            <div>Feels Like: {info.feelsLike}°C</div>
            <div>Humidity: {info.humidity}%</div>
            <div>Min: {info.tempMin}°C | Max: {info.tempMax}°C</div>

            <p>
              The weather can be described as <i>{info.weather}</i>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
