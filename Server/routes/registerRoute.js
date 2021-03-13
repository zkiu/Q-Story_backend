const express = require('express')
const registerRoute = express.Router()

const createUserAuth = require('../services/auth/createUserAuth')

// ! current this endpoint is not used in the app. This is handled on the client side
registerRoute.post('/', (req, res) => {
	createUserAuth(req.body)
		.then((userID) => {
			res.send({message: 'Registration complete'})
		})
		.catch((err) => {
			// TODO: frontend -> handle error message (and other messages/errors) if email is already in use via a toast
			console.error('An error occurred while registering: ', err.errorInfo)
			res.status(400).json({error: err.errorInfo})
		})
})

module.exports = registerRoute
