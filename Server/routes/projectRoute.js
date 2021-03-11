const express = require('express')
const projectRoute = express.Router()

const getProjectList = require('../services/firestore/getProjectList')
const getProject = require('../services/firestore/getProject')
const deleteProject = require('../services/firestore/deleteProject')
const saveProject = require('../services/firestore/saveProject')
const updateProject = require('../services/firestore/updateProject')

projectRoute.get('/:userid', (req, res) => {
	const userID = req.params.userid
	try {
		getProjectList(userID).then((response) => {
			res.json(response)
		})
	} catch (error) {
		console.error(error)
	}
})

projectRoute.get('/:userid/:projid', (req, res) => {
	const projectID = req.params.projid
	const userID = req.params.userid
	try {
		getProject(userID, projectID).then((response) => {
			res.json(response)
		})
	} catch (error) {
		console.error(error)
	}
})

projectRoute.delete('/:userid/:projid', (req, res) => {
	const projectID = req.params.projid
	const userID = req.params.userid
	try {
		deleteProject(userID, projectID).then((response) => {
			res.json(response)
		})
	} catch (error) {
		console.error(error)
	}
})

// -- save a NEW project
projectRoute.post('/:userid/', (req, res) => {
	const userID = req.params.userid
	try {
		saveProject(userID, req.body).then((response) => {
			res.json({message: 'project saved'})
		})
	} catch (error) {
		console.error(error)
	}
})

// -- update EXISTING project
projectRoute.put('/:userid/:projid', (req, res) => {
	const projectID = req.params.projid
	const userID = req.params.userid
	try {
		updateProject(userID, projectID, req.body).then((response) => {
			res.json({message: 'project updated'})
		})
	} catch (error) {
		console.error(error)
	}
})

module.exports = projectRoute
