require('dotenv').config()
const port = process.env.PORT
// const apiKey = process.env.PEXELS_API_KEY
// const axios = require('axios')

const getImage = require('./services/getImage')

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/static', express.static('public'))

app.get('/image/:count', function (req, res) {
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

app.use(function (req, res, next) {
	res.status(404).send('Invalid API access')
})

app.listen(port, () => {
	console.log(`Kiu's server connection is open at http://localhost:${port}`)
})
