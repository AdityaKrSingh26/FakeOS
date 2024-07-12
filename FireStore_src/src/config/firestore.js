// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeABRJ06d3oSzTMzeqGRsAYd6IQ0Ty68c",
  authDomain: "athens-firestore.firebaseapp.com",
  projectId: "athens-firestore",
  storageBucket: "athens-firestore.appspot.com",
  messagingSenderId: "194042232680",
  appId: "1:194042232680:web:7fdb7e3019dac588b8a0dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
