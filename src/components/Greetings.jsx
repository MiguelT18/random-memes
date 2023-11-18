export function Greetings() {
	const currentTime = new Date()
	const currentHours = currentTime.getHours()
	let greetings = ''

	if (currentHours < 12) {
		greetings = 'Good Morning'
	} else if (currentHours < 18) {
		greetings = 'Good afternoon'
	} else {
		greetings = 'Good evening'
	}

	return (
		<div className='my-2'>
			<h1 className='text-3xl uppercase text-center mb-2'>{greetings}!</h1>
		</div>
	)
}
