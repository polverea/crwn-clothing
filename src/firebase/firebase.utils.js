import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const config = {
  apiKey: "AIzaSyCo1Vxssyj3XFl2oNZn0YRF1M59EJzr2OU",
  authDomain: "crwn-db-5bf44.firebaseapp.com",
  projectId: "crwn-db-5bf44",
  storageBucket: "crwn-db-5bf44.appspot.com",
  messagingSenderId: "322222972671",
  appId: "1:322222972671:web:0bf002380f0d89d35db6ca",
  measurementId: "G-RFD9PQDRSL"
}

firebase.initializeApp(config);

const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider)

export default firebase;