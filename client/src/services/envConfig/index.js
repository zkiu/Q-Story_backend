export const API_URL =
	process.env.NODE_ENV === 'production'
		? 'https://q-story.herokuapp.com'
		: 'http://localhost:8080'

export const CLIENT_URL =
	process.env.NODE_ENV === 'production'
		? 'https://q-story.netlify.app'
		: 'http://localhost:3000'
