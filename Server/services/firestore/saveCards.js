// ! went with a simpler solution to save cards array directly in a project doc property

// const db = require('../../firebase/db')

// const saveCards = async (userID, projectID, reqData) => {
// 	const {cards} = reqData

// 	// ! db.batch() needs to be in local scope. If put in the global scope (like right on line 2) then this happpens -> the first time that function runs, it calls batch.commit() and it commits all changes. So, when that function runs again, we get that error because commit was already called for that instance.
// 	const batch = db.batch()
// 	try {
// 		cards.forEach((doc) => {
// 			var docRef = db
// 				.collection(`users/${userID}/projects/${projectID}/cards`)
// 				.doc() //automatically generate unique id
// 			batch.set(docRef, doc)
// 		})
// 		await batch.commit()
// 		return {message: 'cards saved'}
// 	} catch (error) {
// 		throw error
// 	}
// }

// module.exports = saveCards
