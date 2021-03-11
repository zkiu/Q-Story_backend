const db = require('../firebase/db')

const deleteCollection = require('./deleteCollection')

const deleteProject = async (userID, projectID) => {
	try {
		await deleteCollection(
			db,
			`/users/${userID}/projects/${projectID}/cards`,
			10
		)
		await db
			.collection('users')
			.doc(userID)
			.collection('projects')
			.doc(projectID)
			.delete()
		return {message: 'project deleted'}
	} catch (error) {
		throw error
	}
}

module.exports = deleteProject
