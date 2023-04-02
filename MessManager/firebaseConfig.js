import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBvS8O09dk9ciDCyCD0hD99I3fwGyudTFw",
  authDomain: "gc-mess-manager.firebaseapp.com",
  databaseURL:
    "https://gc-mess-manager-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gc-mess-manager",
  storageBucket: "gc-mess-manager.appspot.com",
  messagingSenderId: "645303666804",
  appId: "1:645303666804:web:b888abe7764b70b5ed6921",
  measurementId: "G-PW5NX6L99M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const firestore = getFirestore(app);

export { app, db, firestore };
