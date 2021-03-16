const express = require('express')
const imageRoute = express.Router()

const getImage = require('../services/apiExternal/getImage')

imageRoute.get('/', (req, res) => {
	getImage()
		.then((response) => {
			res.send(response[0])
		})
		.catch((err) => {
			console.error('An error occurred while requesting an image: ', err)
			res.status(400).json({error})
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
})

module.exports = imageRoute
