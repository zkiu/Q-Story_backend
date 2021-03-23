require('dotenv').config()
const apiKey_pexels = process.env.PEXELS_API_KEY
// const apiKey_pexels = process.env.PEXELS_API_KEY_alternative
const apiKey_pixabay = process.env.PIXABAY_API_KEY
const axios = require('axios')

// ! API for PEXEL
const getImage = async (count = 1) => {
	let safeSearchTopic = 'illustrations'
	return (
		axios
			.get(
				`https://api.pexels.com/v1/search?query=${safeSearchTopic}&page=${Math.floor(
					1000 * Math.random()
				)}&per_page=${count}`,
				// `https://api.pexels.com/v1?page=${Math.floor(
				// 	1000 * Math.random()
				// )}&per_page=${count}`,
				{
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
						Authorization: apiKey_pexels,
					},
				}
			)
			.then(({data}) => {
				return data.photos.map((photo) => {
					return {
						imageID: photo.id,
						imgSmall: photo.src.tiny,
						imgMed: photo.src.medium,
						imgLg: photo.src.large,
						width: photo.width,
						height: photo.height,
					}
				})
			})
			// from https://gist.github.com/fgilio/230ccd514e9381fafa51608fcf137253
			.catch((err) => {
				// Error 😨
				if (err.response) {
					/*
					 * The request was made and the server responded with a
					 * status code that falls out of the range of 2xx
					 */
					console.log(err.response.data)
					console.log(err.response.status)
					console.log(err.response.headers)
					throw err
				} else if (err.request) {
					/*
					 * The request was made but no response was received, `error.request`
					 * is an instance of XMLHttpRequest in the browser and an instance
					 * of http.ClientRequest in Node.js
					 */
					console.log(err.request)
					throw err
				} else {
					// Something happened in setting up the request and triggered an Error
					console.log('Error', err.message)
					throw err
				}
			})
	)
}

// ! API for PIXABAY
// const getImage = async (count = 1) => {
// 	// ramdomize page number
// 	let page = Math.ceil(100 * Math.random())

// 	//hits is between 1 and 5
// 	let hits = 1
// 	if (count > 1) {
// 		hits = count
// 	}
// 	if (count > 5) {
// 		hits = 5
// 	}

// 	return axios
// 		.get(
// 			`https://pixabay.com/api/?key=${apiKey_pixabay}&orientation=horizontal&safesearch=true&page=${page}&per_page=5`
// 		)
// 		.then(({data}) => {
// 			return data.hits.map((photo) => {
// 				return {
// 					imageID: photo.id,
// 					imgSmall: photo.previewURL,
// 					imgMed: photo.webformatURL,
// 					imgLg: photo.largeImageURL,
// 					width: photo.imageWidth,
// 					height: photo.imageHeight,
// 				}
// 			})
// 		})
// 		.then((array) => {
// 			return array.slice(0, hits)
// 		})
// 		.catch((err) => {
// 	if (err.response) {
// 		// client received an error response (5xx, 4xx)
// 	} else if (err.request) {
// 		// client never received a response, or request never left
// 	} else {
// 		// anything else
// 	}
// })
// }

module.exports = getImage
