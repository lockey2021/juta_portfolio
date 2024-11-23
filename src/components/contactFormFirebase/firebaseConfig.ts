// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADTAc3RorZZiUqnupsUDHjYhbef2AYPH4",
  authDomain: "portfolio-39f6b.firebaseapp.com",
  databaseURL: "https://portfolio-39f6b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-39f6b",
  storageBucket: "portfolio-39f6b.appspot.com",
  messagingSenderId: "417759744761",
  appId: "1:417759744761:web:25d52265a4b285051f0828"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
