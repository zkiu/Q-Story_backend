import {fb} from '../../firebase/firebase'

// -- updates the user's firebase auth profile by adding the displayName https://firebase.google.com/docs/auth/web/manage-users?authuser=1#update_a_users_profile
// ! this service is specific to firebase when registering with just password and email
export const updateUser = async (displayName) => {
	const user = fb.auth().currentUser
	if (user != null) {
		try {
			return user.updateProfile({
				displayName,
				// photoURL: 'https://example.com/jane-q-user/profile.jpg',
			})
		} catch (error) {
			throw new Error('Was not able to update the displayName on firebase auth')
		}
	}
}
