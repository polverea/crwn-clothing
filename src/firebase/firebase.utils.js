import firebase from 'firebase/compat/app';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)
        return;
    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);

    if(!snapShot.exists()) {
        
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userRef,({
                displayName,
                email,
                createdAt,
                ...additionalData
            }))
        }
        catch(error) {
            console.log("error creating user",error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const firestore = getFirestore()
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider)

export default firebase;