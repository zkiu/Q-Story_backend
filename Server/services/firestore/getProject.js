const db = require('../../firebase/db')

// TODO: need to test this now that cards collection schema is removed
const getProject = async (userID, projectID) => {
	const docRef = db
		.collection('users')
		.doc(userID)
		.collection('projects')
		.doc(projectID)

	const doc = await docRef.get()
	if (!doc.exists) {
		throw new Error('No matching documents.')
	}
	// TODO: specify exactly what properties from doc.data() to return to easy migration to another non-firebase service
	return doc.data()
}

module.exports = getProject
