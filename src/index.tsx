import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//COMPONENTS
import WeatherCards from './components/Weather/WeatherCards';
import Navbar from './components/Navbar/Navbar';
import NewCityform from './components/Weather/NewCityform';

//CSS
import './index.css';
import 'bootswatch/dist/spacelab/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import 'animate.css/animate.min.css';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<div className='container cont2'>
				<Switch>
					<Route exact path='/' component={WeatherCards} />
					<Route exact path='/new-city' component={NewCityform} />
				</Switch>
			</div>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
