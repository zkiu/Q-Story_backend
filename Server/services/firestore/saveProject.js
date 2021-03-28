const db = require('../../firebase/db')

const saveProject = async (userID, projectID = null, reqData) => {
	const {dateCreated, title, cards} = reqData

	const projectColRef = db
		.collection('users')
		.doc(userID)
		.collection('projects')

	let projectDocRef = null

	try {
		!projectID
			? (projectDocRef = await projectColRef.add({}))
			: (projectDocRef = projectColRef.doc(projectID))

		projectDocRef.set({dateCreated, title, cards, projectID: projectDocRef.id})
		return {projectID: projectDocRef.id, message: '🎉 project saved'}
	} catch (error) {
		throw error
	}
}

module.exports = saveProject
