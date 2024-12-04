// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics"; // Import Analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-hOrwYmnu32e9IiCxpbJ134Bjt39Qer4",
  authDomain: "sauna-master-90823.firebaseapp.com",
  projectId: "sauna-master-90823",
  storageBucket: "sauna-master-90823.appspot.com",
  messagingSenderId: "679763142261",
  appId: "1:679763142261:web:96ff8f93174249d89e7a3c",
  measurementId: "G-BWPVSHP4H7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Analytics
const db = getFirestore(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null; // Check if window is available

export { app, db, analytics };
