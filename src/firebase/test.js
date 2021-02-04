import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore();

firestore.collection('users').doc('d95cGJViFILYEE11zIT').collection('cartItems').doc('cbLXmCBakTo0okVsptYx');
firestore.doc('/users/d95cGJViFILYEE11zIT/cartItems/cbLXmCBakTo0okVsptYx');
firestore.collection('/users/d95cGJViFILYEE11zIT/cartItems')