import * as firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth/react-native";
// import "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH3OwYv5SKYsaLYL6eGc5LZSEg3s0To9o",
  authDomain: "molni-project.firebaseapp.com",
  projectId: "molni-project",
  storageBucket: "molni-project.appspot.com",
  messagingSenderId: "1022836995481",
  appId: "1:1022836995481:web:47c08fdaefdda99ce70f08",
  measurementId: "G-Z1GJSK2S1P",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
