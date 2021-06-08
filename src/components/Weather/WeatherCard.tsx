import React from 'react';
import { CityWeather } from './CityWeatherInterface';
import { minMaxTemp, roundTemp, getDateGMT } from './Functions';

interface Props {
	eachCity: CityWeather;
	loadWeather: () => void; // va a recibir nada () y va a devolver nada void
}

const WeatherCard = ({ eachCity, loadWeather }: Props) => {
	const minTemp: number = Math.floor(eachCity.main.temp_min);
	const maxTemp: number = Math.floor(eachCity.main.temp_max);

	return (
		<div className='col-md-4 py-5'>
			<div className='card card-body text-dark mx-5'>
				<h1 className='mx-auto'>
					{eachCity.name}, {eachCity.sys.country}
				</h1>
				<h3 className='mx-auto'>{getDateGMT(eachCity.timezone)}</h3>
				<h5 className='py-4 mx-auto'>
					<i className='wi wi-day-sunny display-1 mx-auto'></i>
				</h5>
				<h1 className='py-2 mx-auto'>{roundTemp(eachCity.main.temp)}&deg;C</h1>
				{minMaxTemp(minTemp, maxTemp)}

				<h4 className='py3 mx-auto'>{eachCity.weather[0].description}</h4>
			</div>
		</div>
	);
};

export default WeatherCard;
