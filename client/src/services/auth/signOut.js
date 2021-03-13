import {fb} from '../../firebase/firebase'

// Wrapper for Firebase api
export const signOut = async () => {
	try {
		await fb.auth().signOut()
	} catch (error) {
		throw new Error('Error signing out.')
	}
}
