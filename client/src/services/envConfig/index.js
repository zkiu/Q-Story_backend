export const API_URL =
	process.env.CLIENT_ENV === 'production'
		? 'https://q-story.herokuapp.com/'
		: 'http://localhost:8080'
