const express = require('express')
const projectRoute = express.Router()

const getImage = require('../services/getImage')

projectRoute.get('/:projid', (req, res) => {
	const projectID = req.params.projid
	res.send({projectid: projectID})
})

projectRoute.get('/list/:userid', (req, res) => {
	const userID = req.params.userid
	res.send({usertid: userID})
})

module.exports = projectRoute
