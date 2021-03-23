const auth = require('../../firebase/auth')

// Check id of user
// -- https://firebase.google.com/docs/auth/admin/verify-id-tokens?authuser=1#retrieve_id_tokens_on_clients
// -- https://firebase.google.com/docs/auth/admin/verify-id-tokens?authuser=1#verify_id_tokens_using_the_firebase_admin_sdk

function checkUserAuth(req) {
	const {token} = req.headers

	return auth
		.verifyIdToken(token)
		.then((decodedToken) => {
			// returns userID
			return decodedToken.uid
		})
		.catch((error) => {
			throw error
		})
}

module.exports = checkUserAuth
