import {fb} from '../../firebase/firebase'

// -- Wrapper for Firebase api - https://firebase.google.com/docs/auth/web/password-auth?authuser=1#sign_in_a_user_with_an_email_address_and_password
export const signIn = async (email, password) => {
	try {
		let userCredentials = await fb
			.auth()
			.signInWithEmailAndPassword(email, password)
		return userCredentials.user.uid
	} catch (error) {
		throw new Error('Error signing in')
	}
}
