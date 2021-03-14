import {fb} from '../../firebase/firebase'

// Wrapper for Firebase api
// https://firebase.google.com/docs/auth/web/start?authuser=1#set_an_authentication_state_observer_and_get_user_data
export const addAuthListener = (callback) => {
	const onChange = (user) => {
		if (user) {
			callback({id: user.uid, email: user.email, displayName: user.displayName})
		} else {
			callback(null)
		}
	}
	return fb.auth().onAuthStateChanged((user) => {
		onChange(user)
	})
}
