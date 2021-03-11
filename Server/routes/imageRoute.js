const express = require('express')
const imageRoute = express.Router()

const getImage = require('../services/apiExternal/getImage')

imageRoute.get('/', (req, res) => {
	getImage()
		.then((response) => {
			// save respond in firestore, then return a copy
			res.send(response[0])
		})
		.catch((err) => {
			console.error('An error occurred while requesting an image: ', err)
		})
})

imageRoute.get('/:count', (req, res) => {
	const {count} = req.params
	getImage(count)
		.then((response) => {
			// save respond in firestore, then return a copy
			res.send(response)
		})
		.catch((err) => {
			console.error('An error occurred while requesting an image: ', err)
		})
})

module.exports = imageRoute
