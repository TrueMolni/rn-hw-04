// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH3OwYv5SKYsaLYL6eGc5LZSEg3s0To9o",
  authDomain: "molni-project.firebaseapp.com",
  projectId: "molni-project",
  storageBucket: "molni-project.appspot.com",
  messagingSenderId: "1022836995481",
  appId: "1:1022836995481:web:47c08fdaefdda99ce70f08",
  measurementId: "G-Z1GJSK2S1P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
