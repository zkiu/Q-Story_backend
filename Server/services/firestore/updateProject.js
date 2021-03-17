// ! went with a simpler solution to save cards array directly in a project doc property

// const db = require('../../firebase/db')

// const deleteCollection = require('./deleteCollection')
// const saveCards = require('./saveCards')

// const updateProject = async (userID, projectID, reqData) => {
// 	// -- helper function
// 	const updateProjectDoc = async (userID, projectID, reqData) => {
// 		const {dateCreated, title} = reqData
// 		try {
// 			const docRef = await db
// 				.collection('users')
// 				.doc(userID)
// 				.collection('projects')
// 				.doc(projectID)
// 				.set({dateCreated, title})
// 		} catch (error) {
// 			throw error
// 		}
// 	}

// 	try {
// 		await deleteCollection(
// 			db,
// 			`/users/${userID}/projects/${projectID}/cards`,
// 			10
// 		)
// 		await updateProjectDoc(userID, projectID, reqData)
// 		await saveCards(userID, projectID, reqData)
// 	} catch (error) {
// 		throw error
// 	}
// }

// module.exports = updateProject
