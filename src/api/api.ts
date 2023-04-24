import { initializeApp, getApps, FirebaseApp, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const FIREBASE_CONFIG = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  appId: import.meta.env.VITE_FIREBASE_ID,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
};

let firebaseApp: FirebaseApp;

if (!getApps().length) {
  firebaseApp = initializeApp(FIREBASE_CONFIG);
} else {
  firebaseApp = getApp();
}

export const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);

export const provider = new GoogleAuthProvider();
