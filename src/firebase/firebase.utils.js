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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch()
    objectToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
    })

    return await batch.commit();
}

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map( doc => {  //.docs will give us the query array snapshot
      const { title, items } = doc.data() //this pull the title & items properties from doc.data // inorder to get the data of the snapshot we use .data
    
      return {
        routeName: encodeURI(title.toLowerCase()),   //javascript method encodeURI = javascript renderer = u can pass it some string and give you back a string
        id: doc.id,                                   // where any characters a URL cannot actually handle or process such as certain symbol spaces but it will convert them to a version that the url can actually read 
        title,
        items
      }                             
    })   

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator
    } ,{})                                // we passed in our initial object the initial object goes to the first new collection and set the first value = to title.toLowerCase
  }
  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;