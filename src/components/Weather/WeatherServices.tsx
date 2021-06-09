import axios from 'axios';
import { CityWeatherInterface } from './CityWeatherInterface';

const WeatherAPI_key = '228c7ee5dde339838102bc6cbbd058ba';

// const myAPI = 'http://localhost:5000';

export const getWeather = async (city: string) => {
	return await axios.get<CityWeatherInterface>(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherAPI_key}&units=metric`
	);
};
