const db = require('../../firebase/db')

const getProjectList = async (userID) => {
	const projectsRef = db.collection('users').doc(userID).collection('projects')

	const snapshot = await projectsRef.get()
	if (snapshot.empty) {
		return []
	}
	// TODO: specify exactly what properties to return
	return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
}

module.exports = getProjectList
