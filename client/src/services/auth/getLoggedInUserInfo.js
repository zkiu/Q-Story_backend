import {fb} from '../../firebase/firebase'

// -- https://firebase.google.com/docs/auth/web/manage-users?authuser=1#get_a_users_profile
// ! Note: currentUser might also be null because the auth object has not finished initializing. If you use an observer to keep track of the user's sign-in status, you don't need to handle this case.
export const getLoggedInUserInfo = () => {
	const user = fb.auth().currentUser
	if (user != null) {
		// console.log(`Output for -> user`, user)
		// user.providerData.forEach(function (profile) {
		// 	console.log('Sign-in provider: ' + profile.providerId)
		// 	console.log('  Provider-specific UID: ' + profile.uid)
		// 	console.log('  Name: ' + profile.displayName)
		// 	console.log('  Email: ' + profile.email)
		// 	console.log('  Photo URL: ' + profile.photoURL)
		// })
		return {
			// user.providerData maybe needed if have multi auth service (github, facebook, etc.)
			id: user.uid,
			displayName: user.displayName,
			email: user.email,
			// photoURL: user.photoURL,
		}
	} else {
		// alert('No user is signed in')
		// -- return null if no user is logged in
		return null
	}
}
