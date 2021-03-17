// ! this is absorbed by saveProject.js

// const db = require('../../firebase/db')

// const createProject = async (userID, reqData) => {
// 	const {dateCreated, title} = reqData

// 	try {
// 		// -- returns a project document's id
// 		const docRef = await db
// 			.collection('users')
// 			.doc(userID)
// 			.collection('projects')
// 			.add({dateCreated, title})
// 		return docRef.id
// 	} catch (error) {
// 		throw error
// 	}
// }

// module.exports = createProject
