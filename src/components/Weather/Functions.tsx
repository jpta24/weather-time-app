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
	if (hours < 12) {
		return (
			<h3 className='px-2 mx-auto'>
				{hours}:{minutes} am
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
