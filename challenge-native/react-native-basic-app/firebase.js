// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth'
import { apiKey } from './config/key'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: 'react-native-todo-app-37d34.firebaseapp.com',
  projectId: 'react-native-todo-app-37d34',
  storageBucket: 'react-native-todo-app-37d34.appspot.com',
  messagingSenderId: '51483202957',
  appId: '1:51483202957:web:4a33d002b519497ed859c4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
