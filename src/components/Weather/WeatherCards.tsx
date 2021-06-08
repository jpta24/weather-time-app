import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import * as WeatherServices from './WeatherServices';

import { CityWeather } from './CityWeatherInterface';

const WeatherCards = () => {
	const [CityWeather, setCityWeather] = useState<CityWeather[]>([]);

	const loadWeather = async () => {
		const city1 = await WeatherServices.getWeather('Berlin');
		const city2 = await WeatherServices.getWeather('Miami');
		const city3 = await WeatherServices.getWeather('Moscu');

		const allWeather: CityWeather[] = [city1.data, city2.data, city3.data];

		setCityWeather(allWeather);
	};

	useEffect(() => {
		loadWeather();
	}, []);

	return (
		<div className='row'>
			{CityWeather.map((eachCity: CityWeather) => {
				return (
					<WeatherCard
						eachCity={eachCity}
						key={eachCity.id}
						loadWeather={loadWeather}
					/>
				);
			})}
		</div>
	);
};

export default WeatherCards;
