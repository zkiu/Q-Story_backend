// require('dotenv').config()
// // TODO: Need to make distinction for dev or prod for the PORT number, since heroku is dynamic port number
// const PORT = process.env.PORT || 8080

// const imageRoute = require('./routes/imageRoute')
// const projectRoute = require('./routes/projectRoute')

// const express = require('express')
// const app = express()
// const cors = require('cors')

// app.use(cors())
// app.use(express.json())
// app.use('/static', express.static('public'))

// app.use('/image', imageRoute)
// app.use('/project', projectRoute)

// app.use(function (req, res, next) {
// 	res.status(404).send('Invalid API access')
// })

// app.listen(PORT, () => {
// 	console.log(`Kiu's server connection is open at http://localhost:${PORT}`)
// })

const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/html')
	res.end('<h1>Hello World</h1>')
})

server.listen(port, () => {
	console.log(`Server running at port ` + port)
})
