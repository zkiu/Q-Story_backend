import {fb} from '../../firebase/firebase'

// -- https://firebase.google.com/docs/auth/web/password-auth?authuser=1#create_a_password-based_account
// -- create new userCredentials in Firebase.Auth() and returns the unique id
export default async function createFBUserWithEmailandPass(email, password) {
	// -- note that when a user is successfully created, they will automatically be signed in
	try {
		const newUserCredential = await fb
			.auth()
			.createUserWithEmailAndPassword(email, password)
		return newUserCredential.user.uid
	} catch (error) {
		throw error
	}
}
