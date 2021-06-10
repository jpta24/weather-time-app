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
	if (hours === 0 && minutes < 10) {
		return `12:0${minutes} am`;
	} else if (hours === 0 && minutes >= 10) {
		return `12:${minutes} am`;
	} else if (hours < 12 && minutes < 10) {
		return `${hours}:0${minutes} am`;
	} else if (hours < 12 && minutes >= 10) {
		return `${hours}:${minutes} am`;
	} else if (hours >= 12 && minutes < 10) {
		return `${hours - 12}:0${minutes} pm`;
	} else {
		return `${hours - 12}:${minutes} pm`;
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
		sunny_night: 'wi-moon-waxing-crescent-4',
		clouds_night: 'wi-night-cloudy',
	};

	const bgImg = {
		thunderstorm_day: 'bgtsd',
		drizzle_day: 'bgsd',
		rain_day: 'bgrd',
		snow_day: 'bgsn',
		fog_day: 'bgfd',
		sunny_day: 'bgsu',
		clouds_day: 'bgcd',
		thunderstorm_night: 'bgtsn',
		drizzle_night: 'bgsn',
		rain_night: 'bgrn',
		snow_night: 'bgsn',
		fog_night: 'bgfn',
		sunny_night: 'bgmn',
		clouds_night: 'bgcn',
	};
	const textStyle = {
		dark: 'dark',
		light: 'light',
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
				bgImg: bgImg.thunderstorm_day,
				textStyle: textStyle.light,
			};
			break;

		case eachCity.weather[0].id >= 200 &&
			eachCity.weather[0].id <= 232 &&
			day === false:
			eachCity = {
				...eachCity,
				icon: weatherIcons.thunderstorm_night,
				bgImg: bgImg.thunderstorm_night,
				textStyle: textStyle.light,
			};
			break;

		case eachCity.weather[0].id >= 300 &&
			eachCity.weather[0].id <= 321 &&
			day === true:
			eachCity = {
				...eachCity,
				icon: weatherIcons.drizzle_day,
				bgImg: bgImg.drizzle_day,
				textStyle: textStyle.dark,
			};
			break;

		case eachCity.weather[0].id >= 300 &&
			eachCity.weather[0].id <= 321 &&
			day === false:
			eachCity = {
				...eachCity,
				icon: weatherIcons.drizzle_night,
				bgImg: bgImg.drizzle_night,
				textStyle: textStyle.light,
			};
			break;

		case eachCity.weather[0].id >= 500 &&
			eachCity.weather[0].id <= 531 &&
			day === true:
			eachCity = {
				...eachCity,
				icon: weatherIcons.rain_day,
				bgImg: bgImg.rain_day,
				textStyle: textStyle.light,
			};
			break;

		case eachCity.weather[0].id >= 500 &&
			eachCity.weather[0].id <= 531 &&
			day === false:
			eachCity = {
				...eachCity,
				icon: weatherIcons.rain_night,
				bgImg: bgImg.rain_night,
				textStyle: textStyle.light,
			};
			break;

		case eachCity.weather[0].id >= 600 &&
			eachCity.weather[0].id <= 622 &&
			day === true:
			eachCity = {
				...eachCity,
				icon: weatherIcons.snow_day,
				bgImg: bgImg.snow_day,
				textStyle: textStyle.dark,
			};
			break;

		case eachCity.weather[0].id >= 600 &&
			eachCity.weather[0].id <= 622 &&
			day === false:
			eachCity = {
				...eachCity,
				icon: weatherIcons.snow_night,
				bgImg: bgImg.snow_night,
				textStyle: textStyle.dark,
			};
			break;

		case eachCity.weather[0].id >= 700 &&
			eachCity.weather[0].id <= 781 &&
			day === true:
			eachCity = {
				...eachCity,
				icon: weatherIcons.fog_day,
				bgImg: bgImg.fog_day,
				textStyle: textStyle.light,
			};
			break;

		case eachCity.weather[0].id >= 700 &&
			eachCity.weather[0].id <= 781 &&
			day === false:
			eachCity = {
				...eachCity,
				icon: weatherIcons.fog_night,
				bgImg: bgImg.fog_night,
				textStyle: textStyle.light,
			};
			break;

		case eachCity.weather[0].id === 800 && day === true:
			eachCity = {
				...eachCity,
				icon: weatherIcons.sunny_day,
				bgImg: bgImg.sunny_day,
				textStyle: textStyle.dark,
			};
			break;

		case eachCity.weather[0].id === 800 && day === false:
			eachCity = {
				...eachCity,
				icon: weatherIcons.sunny_night,
				bgImg: bgImg.sunny_night,
				textStyle: textStyle.light,
			};
			break;

		case eachCity.weather[0].id > 800 &&
			eachCity.weather[0].id <= 804 &&
			day === true:
			eachCity = {
				...eachCity,
				icon: weatherIcons.clouds_day,
				bgImg: bgImg.clouds_day,
				textStyle: textStyle.dark,
			};
			break;

		case eachCity.weather[0].id > 800 &&
			eachCity.weather[0].id <= 804 &&
			day === false:
			eachCity = {
				...eachCity,
				icon: weatherIcons.clouds_night,
				bgImg: bgImg.clouds_night,
				textStyle: textStyle.light,
			};
			break;

		default:
			break;
	}
	return eachCity;
}
