import React from 'react';
import { CityWeatherInterface } from './CityWeatherInterface';
import { minMaxTemp, roundTemp, getDateGMT, getWeatherIcon } from './Functions';

interface Props {
	eachCity: CityWeatherInterface;
	loadWeather: () => void; // va a recibir nada () y va a devolver nada void
}

const WeatherCard = ({ eachCity, loadWeather }: Props) => {
	const newEachCity = getWeatherIcon(eachCity);

	console.log(newEachCity);

	return (
		<div className='col-md-4 py-5 overflow animate__animated animate__fadeInUp'>
			<div
				className={`card card-body text-center mx-5 cardStyle cardx ${newEachCity.bgImg} ${newEachCity.textStyle}`}
			>
				<h1
					className='mx-auto font-weight-bold align-items-center'
					style={{ height: '100px' }}
				>
					{eachCity.name}, {eachCity.sys.country}
				</h1>
				<h3 className='mx-auto'>{getDateGMT(eachCity.timezone)}</h3>
				<h5 className='py-4 mx-auto'>
					<i className={`wi ${newEachCity.icon} display-1 mx-auto`}></i>
				</h5>
				<h1 className='py-2 mx-auto'>{roundTemp(eachCity.main.temp)}&deg;C</h1>
				<div className='text-control'>
					{minMaxTemp(
						Math.floor(eachCity.main.temp_min),
						Math.floor(eachCity.main.temp_max)
					)}
				</div>

				<h3 className='py3 mx-auto'>{eachCity.weather[0].description}</h3>
			</div>
		</div>
	);
};

export default WeatherCard;
