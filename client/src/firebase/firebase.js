import {firebaseConfig} from './firebaseConfig'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig)
