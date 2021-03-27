const db = require('../../firebase/db')

// -- this function will find the given project ID irregardless of which user doc it belongs to
const getProjectFromSharedLink = async (projectID) => {
	var projectArray = db
		.collectionGroup('projects')
		.where('projectID', '==', projectID)

	const snapshot = await projectArray.get()
	if (snapshot.empty) {
		return null
	}
	// TODO: specify exactly what properties to return
	return snapshot.docs[0].data()
}

module.exports = getProjectFromSharedLink
