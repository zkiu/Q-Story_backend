// import firebase from 'firebase/app'
import {fb} from '../../firebase/firebase'

// Wrapper for Firebase api
export const signIn = async (email, password) => {
	try {
		// let userCredentials = await firebase
		let userCredentials = await fb
			.auth()
			.signInWithEmailAndPassword(email, password)
		return userCredentials.user.uid
	} catch (error) {
		throw new Error('Error signing in')
	}
}
