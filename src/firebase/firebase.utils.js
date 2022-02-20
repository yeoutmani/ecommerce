// database/firebaseDb.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDbaurjyyDS-1vw43r4yp4cnC1KBSVGxk8",
  authDomain: "crwn-db-d7457.firebaseapp.com",
  projectId: "crwn-db-d7457",
  storageBucket: "crwn-db-d7457.appspot.com",
  messagingSenderId: "171465506134",
  appId: "1:171465506134:web:1b6ccd5413359f929a2af7",
  measurementId: "G-MMTCXJDQH1"
};
var app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;