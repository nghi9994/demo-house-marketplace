import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAze5LRiGlBscyl4MH4BLuc6lesphYopYU",
  authDomain: "house-marketplace-app-f154d.firebaseapp.com",
  projectId: "house-marketplace-app-f154d",
  storageBucket: "house-marketplace-app-f154d.appspot.com",
  messagingSenderId: "774735919920",
  appId: "1:774735919920:web:631018ef0b010c917326f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();