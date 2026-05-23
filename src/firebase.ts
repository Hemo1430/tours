import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// Use the default database as requested by the user, not the AI Studio assigned one.
const config = {
  ...firebaseConfig,
  firestoreDatabaseId: '(default)'
};

const app = initializeApp(config);

export const db = getFirestore(app, config.firestoreDatabaseId);
export const auth = getAuth(app);
