const db = require('../../firebase/db')

const deleteProject = async (userID, projectID) => {
	try {
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
