// Import the functions you need from the SDKs you need
import firebase from "firebase"
//import firestore from "firebase/firestore"

// This is the data about firebase connection. Please, don't change.
const firebaseConfig = {
  apiKey: "AIzaSyCTI3nV4cospvWRgOizEbeC0I1zPrs0hJM",
  authDomain: "funifelt--ovas.firebaseapp.com",
  projectId: "funifelt--ovas",
  storageBucket: "funifelt--ovas.appspot.com",
  messagingSenderId: "410224739568",
  appId: "1:410224739568:web:491c4c753e435deb74ae35",
  measurementId: "G-7SG7VZ3H4K"
};

// Initializing Firebase
const app = firebase.initializeApp(firebaseConfig);
//app.firestore().settings({ timestampsInSnapshots: true});

export default app