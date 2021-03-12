// TODO: use this to check access rights for user for some endpoint access
const auth = require('../../firebase/auth')

// Check id of user
// -- https://firebase.google.com/docs/auth/admin/verify-id-tokens?authuser=1#retrieve_id_tokens_on_clients
// -- https://firebase.google.com/docs/auth/admin/verify-id-tokens?authuser=1#verify_id_tokens_using_the_firebase_admin_sdk

// TODO: need to convert this to async await?
function checkUserAuth(reqData) {
	// idToken comes from the client app
	admin
		.auth()
		.verifyIdToken(idToken)
		.then((decodedToken) => {
			return (uid = decodedToken.uid)
		})
		.catch((error) => {
			throw error
		})
}

module.exports = checkUserAuth
