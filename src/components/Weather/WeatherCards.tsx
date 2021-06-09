import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import * as WeatherServices from './WeatherServices';

import { CityWeatherInterface } from './CityWeatherInterface';

const WeatherCards = () => {
	const [CitiesWeather, setCitiesWeather] = useState<CityWeatherInterface[]>(
		[]
	);

	const loadWeather = async () => {
		const city1 = await WeatherServices.getWeather('Berlin');
		const city2 = await WeatherServices.getWeather('Miami');
		const city3 = await WeatherServices.getWeather('Buenos Aires');

		const allWeather: CityWeatherInterface[] = [
			city1.data,
			city2.data,
			city3.data,
		];

		setCitiesWeather(allWeather);
	};

	useEffect(() => {
		loadWeather();
	}, []);

	return (
		<div className='row'>
			{CitiesWeather.map((eachCity: CityWeatherInterface) => {
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
