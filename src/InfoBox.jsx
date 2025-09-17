import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { motion } from "framer-motion";

export default function InfoBox({ weather }) {
	const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

	return (
		<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="info-box">
			<Card
				sx={{
					maxWidth: 400,
					margin: "20px auto",
					borderRadius: "16px",
					boxShadow: 4,
					textAlign: "center",
					background: "rgba(255,255,255,0.85)",
				}}
			>
				<CardMedia
					component="img"
					image={iconUrl}
					alt={weather.description}
					sx={{ width: 100, margin: "0 auto", paddingTop: "15px" }}
				/>
				<CardContent>
					<Typography variant="h5" gutterBottom>
						{weather.city}
					</Typography>
					<Typography variant="h3" gutterBottom fontWeight="bold">
						{weather.temperature}°C
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						{weather.description.charAt(0).toUpperCase() + weather.description.slice(1)}
					</Typography>
					<Typography variant="body2">🌡 Feels Like: {weather.feelsLike}°C</Typography>
					<Typography variant="body2">💧 Humidity: {weather.humidity}%</Typography>
					<Typography variant="body2">💨 Wind: {weather.wind} m/s</Typography>
					<Typography variant="body2">
						🔼 Max: {weather.maxTemp}°C | 🔽 Min: {weather.minTemp}°C
					</Typography>
				</CardContent>
			</Card>
		</motion.div>
	);
}
