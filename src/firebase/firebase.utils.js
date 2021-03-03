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


firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

