import {fb} from '../../firebase/firebase'

export const getUserInfo = () => {
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
			photoURL: user.photoURL,
		}
	} else {
		alert('No user is signed in')
	}
}
