// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_bkGULk1FIXeBuBcms2SwiW6npWWZQKo",
  authDomain: "travellistpe.firebaseapp.com",
  projectId: "travellistpe",
  storageBucket: "travellistpe.firebasestorage.app",
  messagingSenderId: "890778799256",
  appId: "1:890778799256:web:19ddd29ee7d3f65c2f14ed",
  measurementId: "G-8602MDMH34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);