// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-65bc5.firebaseapp.com",
  projectId: "mern-estate-65bc5",
  storageBucket: "mern-estate-65bc5.appspot.com",
  messagingSenderId: "262251091998",
  appId: "1:262251091998:web:e428007751f08adb7f760f",
  measurementId: "G-7MKBYVRD22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);