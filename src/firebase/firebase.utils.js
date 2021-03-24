import firebase from 'firebase/app';

import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyD_AI__DAWnxG_6fNtABbWB1e1fcYQZp_M",
    authDomain: "crwn-db-388d7.firebaseapp.com",
    projectId: "crwn-db-388d7",
    storageBucket: "crwn-db-388d7.appspot.com",
    messagingSenderId: "854637040362",
    appId: "1:854637040362:web:db382d1e2276c612ecbd93",
    measurementId: "G-W85PG68P0B"
  }

  export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{

        await userRef.set({
          displayName,
          email,
          createdAt,
          ...aditionalData
        })

      }catch(error){
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //INITIALIZE GOOGLE LOGIN
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;