import {firebaseConfig} from './firebaseConfig'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
import 'firebase/auth'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
