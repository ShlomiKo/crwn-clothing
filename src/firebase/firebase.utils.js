import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBO245AFwV6Mg8T2Flb8QtqM4ivQS0STwA',
  authDomain: 'crwn-db-a2e18.firebaseapp.com',
  projectId: 'crwn-db-a2e18',
  storageBucket: 'crwn-db-a2e18.appspot.com',
  messagingSenderId: '350727135455',
  appId: '1:350727135455:web:aeec37c9bee767bb90096a',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
