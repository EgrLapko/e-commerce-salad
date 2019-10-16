import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDSney_KLdBLZso8Ol5xik8ekzfMah5Pn0",
    authDomain: "e-commerce-db-506fc.firebaseapp.com",
    databaseURL: "https://e-commerce-db-506fc.firebaseio.com",
    projectId: "e-commerce-db-506fc",
    storageBucket: "e-commerce-db-506fc.appspot.com",
    messagingSenderId: "478490971769",
    appId: "1:478490971769:web:004f1e9125a106ad7e0ea8",
    measurementId: "G-KEWQJT6ENF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set ({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;