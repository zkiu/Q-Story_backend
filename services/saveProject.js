const db = require('../firebase/db')

const createProject = require('./createProject')
const saveCards = require('./saveCards')

const saveProject = async (userID, reqData) => {
	try {
		const projectID = await createProject(userID, reqData)
		await saveCards(userID, projectID, reqData)
	} catch (error) {
		throw error
	}
}

module.exports = saveProject
