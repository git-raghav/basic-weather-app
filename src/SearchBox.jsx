import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ onSearch }) {
	const [city, setCity] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (city.trim()) {
			onSearch(city);
			setCity("");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="search-box">
			<TextField label="Enter City" variant="outlined" value={city} onChange={(e) => setCity(e.target.value)} required />
			<Button sx={{ marginLeft: "10px" }} variant="contained" type="submit">
				Search
			</Button>
		</form>
	);
}
