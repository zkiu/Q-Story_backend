import {fb} from '../../firebase/firebase'

// -- creates a new user doc at the 'users' collection.
export default async function createUserDoc(id, displayName, email) {
	const db = fb.firestore()

	db.collection('users')
		.doc(id)
		.set({displayName, email})
		.catch((error) => {
			throw error
		})
}
