const db = require('../firebase/db')

const getProject = async (projectID) => {
	// TODO: need to explicitly add id to a doc for workaround with collectionGroup querying https://stackoverflow.com/questions/56188250/how-to-perform-collection-group-query-using-document-id-in-cloud-firestore
	const docRef = db.collectionGroup('projects').where('id', '==', projectID)

	return docRef.get().then((snapshot) => {
		// TODO: do map and return just the required fields
		snapshot.forEach((doc) => {
			console.log(doc.data())
		})
	})
}

module.exports = getProject
