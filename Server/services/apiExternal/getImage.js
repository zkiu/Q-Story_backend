require('dotenv').config()
const apiKey_pexels = process.env.PEXELS_API_KEY
const apiKey_pixabay = process.env.PIXABAY_API_KEY

const axios = require('axios')

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
// 					imgLag: photo.largeImageURL,
// 					width: photo.imageWidth,
// 					height: photo.imageHeight,
// 				}
// 			})
// 		})
// 		.then((array) => {
// 			return array.slice(0, hits)
// 		})
// }
// ! API for PEXEL
const getImage = async (count = 1) => {
	return axios
		.get(
			`https://api.pexels.com/v1/curated?page=${Math.floor(
				1000 * Math.random()
			)}&per_page=${count}`,
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
					imgLag: photo.src.large,
					width: photo.width,
					height: photo.height,
				}
			})
		})
}

module.exports = getImage
