import React, { useEffect, useState } from 'react';
import { CityWeatherInterface } from './CityWeatherInterface';
import { minMaxTemp, roundTemp, getDateGMT, getWeatherIcon } from './Functions';

interface Props {
	eachCity: CityWeatherInterface;
}

const WeatherCard = ({ eachCity }: Props) => {
	const [MinutesTime, setMinutesTime] = useState<string>();

	useEffect(() => {
		setInterval(() => {
			const timeSS = getDateGMT(eachCity.timezone);
			setMinutesTime(timeSS);
		}, 1000);
	}, [eachCity.timezone]);

	const newEachCity = getWeatherIcon(eachCity);

	return (
		<div className='col-md-4 py-5'>
			<div
				className={`card card-body text-center mx-5 cardStyle cardx ${newEachCity.bgImg} ${newEachCity.textStyle}`}
			>
				<h1
					className='mx-auto font-weight-bold align-items-center'
					style={{ height: '100px' }}
				>
					{eachCity.name}, {eachCity.sys.country}
				</h1>
				<h3 className='px-2 mx-auto' style={{ height: '35px' }}>
					{MinutesTime}
				</h3>
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
