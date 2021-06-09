import { CityWeatherInterface } from './CityWeatherInterface';

export function roundTemp(temp: number) {
	return Math.floor(temp);
}

export function minMaxTemp(min: number, max: number) {
	return (
		<h3 className='mx-auto'>
			<span className='px-4'>{min}&deg;C</span>
			<span className='px-4'>{max}&deg;C</span>
		</h3>
	);
}

export function getDateGMT(timezone: number) {
	const date = new Date();
	const timeZoneLocal = date.getTimezoneOffset() * 60000;
	const timeZoneCity = timezone * 1000;
	const localDate = new Date(date.getTime() + timeZoneLocal + timeZoneCity);
	const hours = localDate.getHours();
	const minutes = localDate.getMinutes();
	if (hours < 12 && minutes < 10) {
		return (
			<h3 className='px-2 mx-auto'>
				{hours}:0{minutes} am
			</h3>
		);
	} else if (hours < 12 && minutes >= 10) {
		return (
			<h3 className='px-2 mx-auto'>
				{hours}:{minutes} am
			</h3>
		);
	} else if (hours >= 12 && minutes < 10) {
		return (
			<h3 className='px-2 mx-auto'>
				{hours - 12}:0{minutes} pm
			</h3>
		);
	} else {
		return (
			<h3 className='px-2 mx-auto'>
				{hours - 12}:{minutes} pm
			</h3>
		);
	}
}

export function getWeatherIcon(eachCity: CityWeatherInterface) {
	const weatherIcons = {
		thunderstorm_day: 'wi-day-thunderstorm',
		drizzle_day: 'wi-day-sleet',
		rain_day: 'wi-day-rain',
		snow_day: 'wi-day-snow',
		fog_day: 'wi-day-fog',
		sunny_day: 'wi-day-sunny',
		clouds_day: 'wi-day-cloudy',
		thunderstorm_night: 'wi-night-thunderstorm',
		drizzle_night: 'wi-night-sleet',
		rain_night: 'wi-night-rain',
		snow_night: 'wi-night-snow',
		fog_night: 'wi-night-fog',
		sunny_night: 'wi-moon-first-quarter',
		clouds_night: 'wi-night-cloudy',
	};
	let day = false;
	if (eachCity.dt > eachCity.sys.sunrise && eachCity.dt < eachCity.sys.sunset) {
		day = true;
	}

	switch (true) {
		case eachCity.weather[0].id >= 200 &&
			eachCity.weather[0].id <= 232 &&
			day === true:
			eachCity = {
				...eachCity,
				icon: weatherIcons.thunderstorm_day,
				bgImg: '',
				textStyle: '',
			};
			break;

		case eachCity.weather[0].id >= 200 &&
			eachCity.weather[0].id <= 232 &&
			day === false:
			eachCity = {
				...eachCity,
				icon: weatherIcons.thunderstorm_night,
				bgImg: '',
				textStyle: '',
			};
			break;

		case eachCity.weather[0].id >= 300 &&
			eachCity.weather[0].id <= 321 &&
			day === true:
			eachCity = {
				...eachCity,
				icon: weatherIcons.drizzle_day,
				bgImg: '',
				textStyle: '',
			};
			break;

		case eachCity.weather[0].id >= 300 &&
			eachCity.weather[0].id <= 321 &&
			day === false:
			eachCity = {
				...eachCity,
				icon: weatherIcons.drizzle_night,
				bgImg: '',
				textStyle: '',
			};
			break;

		case eachCity.weather[0].id >= 500 &&
			eachCity.weather[0].id <= 531 &&
			day === true:
			eachCity = {
				...eachCity,
				icon: weatherIcons.rain_day,
				bgImg: '',
				textStyle: '',
			};
			break;

		case eachCity.weather[0].id >= 500 &&
			eachCity.weather[0].id <= 531 &&
			day === false:
			eachCity = {
				...eachCity,
				icon: weatherIcons.rain_night,
				bgImg: '',
				textStyle: '',
			};
			break;

		case eachCity.weather[0].id >= 600 &&
			eachCity.weather[0].id <= 622 &&
			day === true:
			eachCity = {
				...eachCity,
				icon: weatherIcons.snow_day,
				bgImg: '',
				textStyle: '',
			};
			break;

		case eachCity.weather[0].id >= 600 &&
			eachCity.weather[0].id <= 622 &&
			day === false:
			eachCity = {
				...eachCity,
				icon: weatherIcons.snow_night,
				bgImg: '',
				textStyle: '',
			};
			break;

		case eachCity.weather[0].id >= 700 &&
			eachCity.weather[0].id <= 781 &&
			day === true:
			eachCity = {
				...eachCity,
				icon: weatherIcons.fog_day,
				bgImg: '',
				textStyle: '',
			};
			break;

		case eachCity.weather[0].id >= 700 &&
			eachCity.weather[0].id <= 781 &&
			day === false:
			eachCity = {
				...eachCity,
				icon: weatherIcons.fog_night,
				bgImg: '',
				textStyle: '',
			};
			break;

		case eachCity.weather[0].id === 800 && day === true:
			eachCity = {
				...eachCity,
				icon: weatherIcons.sunny_day,
				bgImg: '',
				textStyle: '',
			};
			break;

		case eachCity.weather[0].id === 800 && day === false:
			eachCity = {
				...eachCity,
				icon: weatherIcons.sunny_night,
				bgImg: '',
				textStyle: '',
			};
			break;

		case eachCity.weather[0].id > 800 &&
			eachCity.weather[0].id <= 804 &&
			day === true:
			eachCity = {
				...eachCity,
				icon: weatherIcons.clouds_day,
				bgImg: '',
				textStyle: '',
			};
			break;

		case eachCity.weather[0].id > 800 &&
			eachCity.weather[0].id <= 804 &&
			day === false:
			eachCity = {
				...eachCity,
				icon: weatherIcons.clouds_night,
				bgImg: '',
				textStyle: '',
			};
			break;

		default:
			break;
	}
	return eachCity;
}
