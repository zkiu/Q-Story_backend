const admin = require('firebase-admin')

// -- for local development
// const serviceAccount = require('./firebase-adminsdk-key.json')
// admin.initializeApp({
// 	credential: admin.credential.cert(serviceAccount),
// })

//https://stackoverflow.com/questions/41287108/deploying-firebase-app-with-service-account-to-heroku-environment-variables-wit
admin.initializeApp({
	credential: admin.credential.cert({
		projectId: process.env.FIREBASE_PROJECT_ID,
		private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
		client_email: process.env.FIREBASE_CLIENT_EMAIL,
	}),
})
module.exports = admin
