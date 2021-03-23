const express = require('express')
const imageRoute = express.Router()

const getImage = require('../services/apiExternal/getImage')

imageRoute.get('/', (req, res) => {
	getImage()
		.then((response) => {
			res.send(response[0])
		})
		.catch((err) => {
			if (err.response.status === 429) {
				res.status(429).json({
					err: err.response.data,
					message:
						'The 3rd party API limit for images have been reached. The developer (Kiu) will need money to subscribed to a paid tier of the API to increase image availability.',
				})
			} else {
				res.json(err)
			}
		})
})

imageRoute.get('/:count', (req, res) => {
	const {count} = req.params
	let arr = Array(+count)
		.fill(null)
		.map(() => {
			return getImage()
		})
	Promise.all(arr)
		.then((results) => {
			return results.map((result) => result[0])
		})
		.then((responses) => {
			res.send(responses)
		})
		.catch((err) => {
			if (err.response.status === 429) {
				res.status(429).json({
					err: err.response.data,
					message:
						'The 3rd party image API limit has been reached. The poor developer (Kiu) will need income to subscribed to a paid tier of the 3rd party API to increase image availability for this app. Contact me if you want to donate.',
				})
			} else {
				res.json(err)
			}
		})
})

module.exports = imageRoute
