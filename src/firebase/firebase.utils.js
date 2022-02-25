// database/firebaseDb.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';
import { collection, getDoc, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDbaurjyyDS-1vw43r4yp4cnC1KBSVGxk8',
  authDomain: 'crwn-db-d7457.firebaseapp.com',
  projectId: 'crwn-db-d7457',
  storageBucket: 'crwn-db-d7457.appspot.com',
  messagingSenderId: '171465506134',
  appId: '1:171465506134:web:1b6ccd5413359f929a2af7',
  measurementId: 'G-MMTCXJDQH1',
};
var app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const docRef = doc(db, 'users', userAuth.uid);
  const snapshot = await getDoc(docRef);
  console.log('snapshot', snapshot.exists());

  const collectionRef = collection(db, 'users');

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      console.log('yes');
      await setDoc(doc(collectionRef, userAuth.uid), {
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error);
    }
  }
  return snapshot;
};
