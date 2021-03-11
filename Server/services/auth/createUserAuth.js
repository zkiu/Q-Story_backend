// Creates a user doc when the user register
// -- https://firebase.google.com/docs/auth/admin/manage-users#create_a_user

function createUserAuth(reqData) {
	const {email, password, displayName} = reqData

	admin
		.auth()
		.createUser({
			email,
			emailVerified: false,
			phoneNumber: '+11234567890',
			password,
			displayName,
			photoURL: 'http://www.example.com/12345678/photo.png',
			disabled: false,
		})
		.then((userRecord) => {
			// See the UserRecord reference doc for the contents of userRecord.
			console.log('Successfully created new user:', userRecord.uid)
		})
		.catch((error) => {
			console.log('Error creating new user:', error)
		})
}

module.exports = createUserAuth
