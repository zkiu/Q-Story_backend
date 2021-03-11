const db = require('../../firebase/db')
const batch = db.batch()

const saveCards = async (userID, projectID, reqData) => {
	const {cards} = reqData

	cards.forEach((doc) => {
		var docRef = db
			.collection(`users/${userID}/projects/${projectID}/cards`)
			.doc() //automatically generate unique id
		batch.set(docRef, doc)
	})

	try {
		batch.commit()
	} catch (error) {
		throw error
	}
}

module.exports = saveCards
