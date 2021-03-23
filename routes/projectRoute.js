const express = require('express')
const projectRoute = express.Router()

const getProjectList = require('../services/firestore/getProjectList')
const getProject = require('../services/firestore/getProject')
const deleteProject = require('../services/firestore/deleteProject')
const saveProject = require('../services/firestore/saveProject')
const checkUserAuth = require('../services/auth/checkUserAuth')

// -- get project list
projectRoute.get('/projectlist', async (req, res) => {
	try {
		const userID = await checkUserAuth(req)
		getProjectList(userID).then((response) => {
			res.json(response)
		})
	} catch (error) {
		console.error(error)
		res.status(400).json({error})
	}
})

// -- get project doc
projectRoute.get('/:projid', async (req, res) => {
	const projectID = req.params.projid
	try {
		const userID = await checkUserAuth(req)
		getProject(userID, projectID).then((response) => {
			res.json(response)
		})
	} catch (error) {
		console.error(error)
		res.status(400).json({error})
	}
})

projectRoute.delete('/:projid', (req, res) => {
	const projectID = req.params.projid
	try {
		const userID = await checkUserAuth(req)
		deleteProject(userID, projectID).then((response) => {
			res.json(response)
		})
	} catch (error) {
		console.error(error)
		res.status(400).json({error})
	}
})

// -- save a NEW project
projectRoute.post('/', async (req, res) => {
	try {
		const userID = await checkUserAuth(req)
		saveProject(userID, null, req.body).then((response) => {
			// the response is in the form of {projectID: , message: }
			res.json(response)
		})
	} catch (error) {
		console.error(error)
		res.status(400).json({error})
	}
})

// -- update a project
projectRoute.post('/:projid', async (req, res) => {
	const projectID = req.params.projid
	try {
		const userID = await checkUserAuth(req)
		saveProject(userID, projectID, req.body).then((response) => {
			// the response is in the form of {projectID: , message: }
			res.json(response)
		})
	} catch (error) {
		console.error(error)
		res.status(400).json({error})
	}
})

module.exports = projectRoute
