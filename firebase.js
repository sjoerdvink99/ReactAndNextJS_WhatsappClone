import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9tr8Fhc1Rqjy-lnnqOQ5T6ubtCojRYAU",
  authDomain: "whatsapp2-bc371.firebaseapp.com",
  projectId: "whatsapp2-bc371",
  storageBucket: "whatsapp2-bc371.appspot.com",
  messagingSenderId: "700430901223",
  appId: "1:700430901223:web:a9f4d5a3c637e911f62742",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
