import createFBUserWithEmailandPass from './createFBUserWithEmailandPass'
import createUserDoc from '../firestore/createUserDoc'

// -- takes in one parametre (an object). This object is deconstructed into the following variables
export const registerUser = async ({displayName, email, password}) => {
	try {
		// -- create new userCredentials in Firebase.Auth() and return the id
		const id = await createFBUserWithEmailandPass(email, password)
		await createUserDoc(id, displayName, email)

		return {
			message: 'Registration completed. You are now automatically signed in',
		}
	} catch (error) {
		throw error
	}
}
