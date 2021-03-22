const db = require('../../firebase/db')

// const createProject = require('./createProject')
// const saveCards = require('./saveCards')

const saveProject = async (userID, projectID = null, reqData) => {
	const {dateCreated, title, cards} = reqData

	const projectColRef = db
		.collection('users')
		.doc(userID)
		.collection('projects')

	try {
		if (!projectID) {
			const docRef = await projectColRef.add({dateCreated, title, cards})
			// return docRef.id
			return {
				projectID: docRef.id,
				message: '🎉 project saved',
			}
		} else {
			const docRef = await projectColRef
				.doc(projectID)
				.set({dateCreated, title, cards})
			return {projectID, message: '🎉 project saved'}
		}
	} catch (error) {
		throw error
	}
}

module.exports = saveProject
