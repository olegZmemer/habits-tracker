import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ82qDtgnHr1gma5xiUKxLzkSzKaxhl6c",
  authDomain: "habits-tracker-69bda.firebaseapp.com",
  databaseURL: "https://habits-tracker-69bda-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "habits-tracker-69bda",
  storageBucket: "habits-tracker-69bda.appspot.com",
  messagingSenderId: "225112204221",
  appId: "1:225112204221:web:9dddbb91c8da683ca9e8d4",
  measurementId: "G-TWWHKTFSKL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();


