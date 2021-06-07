import React from 'react';

const Variable = () => {
	var city1 = {
		city: 'Berlin',
		country: 'Germany',
		time: '12:25 pm',
		weather: {
			temp: 20,
			tempMax: 25,
			tempMin: 15,
			sky: 'sunny',
			description: 'really hot day',
		},
		weatherDay: {
			tempMax: 25,
			tempMin: 15,
			sky: 'sunny',
		},
		weatherTomorrow: {
			tempMax: 25,
			tempMin: 15,
			sky: 'sunny',
		},
	};
	return <div>{city1}</div>;
};

export default Variable;
