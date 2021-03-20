const db = require('../../firebase/db')

const getProject = async (userID, projectID) => {
	const docRef = db
		.collection('users')
		.doc(userID)
		.collection('projects')
		.doc(projectID)

	const doc = await docRef.get()
	if (!doc.exists) {
		throw new Error('Project was not found.')
	}

	// return doc.data()
	return {
		dateCreated: doc.data().dateCreated,
		title: doc.data().title,
		cards: doc.data().cards,
	}
}

module.exports = getProject
