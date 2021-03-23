import {createFBUserWithEmailandPass} from './createFBUserWithEmailandPass'
import {updateUser} from './updateUser'
import createUserDoc from '../firestore/createUserDoc'

// -- takes in one parametre (an object). This object is deconstructed into the following variables
export const registerUser = async ({displayName, email, password}) => {
	try {
		const id = await createFBUserWithEmailandPass(email, password)
		// TODO: could make the 2 calls below concurrent to slightly increase performance at the cost of more code
		await updateUser(displayName)
		await createUserDoc(id, displayName, email)

		return {
			message: 'Registration completed 🥳. You are now automatically signed in',
		}
	} catch (error) {
		throw error
	}
}
