const db = require('../../firebase/db')

const getProject = async (userID, projectID) => {
	const cardsRef = db
		.collection('users')
		.doc(userID)
		.collection('projects')
		.doc(projectID)
		.collection('cards')

	const snapshot = await cardsRef.get()
	if (snapshot.empty) {
		throw new Error('No matching documents.')
	}
	// TODO: specify exactly what properties to return
	return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
}

module.exports = getProject
