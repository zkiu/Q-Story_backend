const express = require('express')
const projectRoute = express.Router()

const getProject = require('../services/getProject')

projectRoute.get('/:userid/:projid', (req, res) => {
	const projectID = req.params.projid
	const userID = req.params.userid

	getProject(userID, projectID).then((response) => {
		res.json(response)
	})
})

projectRoute.get('/list/:userid', (req, res) => {
	const userID = req.params.userid
	res.send({userid: userID})
})

module.exports = projectRoute
