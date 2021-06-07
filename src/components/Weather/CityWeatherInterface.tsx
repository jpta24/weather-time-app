export interface CityWeather {
	coord: {
		lon: number;
		lat: number;
	};
	weather: [
		{
			id: number;
			main: string;
			description: string;
			icon: string;
		}
	];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	dt: string;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: string | Date;
		sunset: string | Date;
	};
	timezone: number;
	id: number;
	name: number;
	cod: number;
}
