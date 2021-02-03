import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDCaMaSlBKf1aGPVeNBrhP5NQS8WCycg6k",
    authDomain: "crwn-merch.firebaseapp.com",
    projectId: "crwn-merch",
    storageBucket: "crwn-merch.appspot.com",
    messagingSenderId: "1017801937893",
    appId: "1:1017801937893:web:1ce9fad12ac0bac3eed50c",
    measurementId: "G-5QWKLEHLH5"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;