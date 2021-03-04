import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBiWIGB0DS1BDX0oikyuOFPOkG2GRGy1rU",
    authDomain: "crwn-db-7ae1b.firebaseapp.com",
    projectId: "crwn-db-7ae1b",
    storageBucket: "crwn-db-7ae1b.appspot.com",
    messagingSenderId: "844764429030",
    appId: "1:844764429030:web:e5d5179d7b60676b139927",
    measurementId: "G-S2QKX21JY1"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();


    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt , ...additionalData
            })
        }catch(error) {
            console.log('error creating user', error.message);
        }

    }

    return userRef;

}

firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

