import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import axios from "axios";

export default function WeatherApp() {
	const [weather, setWeather] = useState(null);
	const GEOCODE_API_URL = "https://api.openweathermap.org/geo/1.0/direct";
	const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
	const API_KEY = "d70c0a93e5ac37adfb9abfe8890ac567";

	// Fetch weather data by city
	const fetchWeather = async (city) => {
		try {
			const res = await axios.get(`${GEOCODE_API_URL}?q=${city}&limit=1&appid=${API_KEY}`);
			const { lat, lon, name } = res.data[0];
			const res2 = await axios.get(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
			setWeather({
				city: name,
				feelsLike: res2.data.main.feels_like,
				humidity: res2.data.main.humidity,
				temperature: res2.data.main.temp,
				maxTemp: res2.data.main.temp_max,
				minTemp: res2.data.main.temp_min,
				sunrise: res2.data.sys.sunrise,
				sunset: res2.data.sys.sunset,
				wind: res2.data.wind.speed,
				description: res2.data.weather[0].description,
				icon: res2.data.weather[0].icon,
			});
		} catch (err) {
			console.error("Error fetching weather:", err);
		}
	};

	// Default load: Delhi
	useEffect(() => {
		fetchWeather("Delhi");
	}, []);

	return (
		<div className="app-container">
			<h1 className="title">🌤 Weather App</h1>
			<SearchBox onSearch={fetchWeather} />
			{weather && <InfoBox weather={weather} />}
		</div>
	);
}
