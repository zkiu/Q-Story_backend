const express = require('express')
const projectRoute = express.Router()

const getProject = require('../services/getProject')

projectRoute.get('/:projid', (req, res) => {
	const projectID = req.params.projid

	getProject(projectID).then((response) => {
		res.json(response)
	})
})

projectRoute.get('/list/:userid', (req, res) => {
	const userID = req.params.userid
	res.send({usertid: userID})
})

module.exports = projectRoute
