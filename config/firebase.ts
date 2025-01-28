// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeAuth, getReactNativePersistence } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEocjh2p0Uy-fdwE_R0TzXi25Ivg9GOfg",
  authDomain: "cashflow-expense-tracker.firebaseapp.com",
  projectId: "cashflow-expense-tracker",
  storageBucket: "cashflow-expense-tracker.firebasestorage.app",
  messagingSenderId: "153880064395",
  appId: "1:153880064395:web:b23e1ba6715f415341ff8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

// db
export const firestore = getFirestore(app);