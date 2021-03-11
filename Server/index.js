require('dotenv').config()
const port = process.env.PORT

const imageRoute = require('./routes/imageRoute')
const projectRoute = require('./routes/projectRoute')
const registerRoute = require('./routes/registerRoute')

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/static', express.static('public'))

app.use('/image', imageRoute)
app.use('/project', projectRoute)
app.use('/register', registerRoute)

app.use(function (req, res, next) {
	res.status(404).send('Invalid API access')
})

app.listen(port, () => {
	console.log(`Kiu's server connection is open at http://localhost:${port}`)
})
