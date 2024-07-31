import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDxgCKJvWTo7LfvPuy70dO__yV2iU7oLO4",
    authDomain: "ecom-e6ebd.firebaseapp.com",
    projectId: "ecom-e6ebd",
    storageBucket: "ecom-e6ebd.appspot.com",
    messagingSenderId: "268928075398",
    appId: "1:268928075398:web:c06592b653adb5de15b307",
    measurementId: "G-62GZEXPXG5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
