import {fb} from '../../firebase/firebase'

// -- creates a new user doc at the 'users' collection.
export default async function createUserDoc(id, displayName, email) {
	const db = fb.firestore()

	// TODO: Add createdDate for when account created
	db.collection('users')
		.doc(id)
		.set({displayName, email})
		.catch((error) => {
			throw error
		})
}
