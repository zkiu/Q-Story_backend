require('dotenv').config()
const apiKey = process.env.PEXELS_API_KEY

const axios = require('axios')

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
					Authorization: apiKey,
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
