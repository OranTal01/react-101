import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDml_F8CdWBdeZxtIzLdckYQCJLvlHpPZ0',
  authDomain: 'crwn-db-7414b.firebaseapp.com',
  projectId: 'crwn-db-7414b',
  storageBucket: 'crwn-db-7414b.appspot.com',
  messagingSenderId: '6713433618',
  appId: '1:6713433618:web:c50813683ba90d6c1282cb',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
