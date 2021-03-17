// ! this will be all handled on the frontend

// // TODO: add frontend to firebase list of authorized domain: https://console.firebase.google.com/u/1/project/q-story-1/authentication/providers

// const auth = require('../../firebase/auth')

// // Creates a user doc when the user register
// // -- https://firebase.google.com/docs/auth/admin/manage-users#create_a_user

// async function createUserAuth(reqData) {
// 	// TODO: is password from front end visible when set input field as password?
// 	const {email, password, displayName} = reqData

// 	const userCredential = await auth.createUser({
// 		email,
// 		emailVerified: false,
// 		password,
// 		displayName,
// 		disabled: false,
// 		// phoneNumber: '+11234567890',
// 		// photoURL: 'http://www.example.com/12345678/photo.png',
// 	})

// 	return userCredential.uid
// }

// module.exports = createUserAuth
