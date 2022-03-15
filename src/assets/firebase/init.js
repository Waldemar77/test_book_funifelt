// Import the functions you need from the SDKs you need
import firebase from "firebase"
//import firestore from "firebase/firestore"

// This is the data about firebase connection. Please, don't change.
const firebaseConfig = {
  apiKey: "AIzaSyDvBdsZZ7So8LNkm9GRgQKg6IV106feYi8",
  authDomain: "viva-la-ciencia.firebaseapp.com",
  projectId: "viva-la-ciencia",
  storageBucket: "viva-la-ciencia.appspot.com",
  messagingSenderId: "6600895630",
  appId: "1:6600895630:web:e884f81f61b3c186392ddf",
  measurementId: "G-D1YZYR6JJZ"
};

// Initializing Firebase
const app = firebase.initializeApp(firebaseConfig);
//app.firestore().settings({ timestampsInSnapshots: true});

export default app