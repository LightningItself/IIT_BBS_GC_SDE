import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBvS8O09dk9ciDCyCD0hD99I3fwGyudTFw",
  authDomain: "gc-mess-manager.firebaseapp.com",
  projectId: "gc-mess-manager",
  storageBucket: "gc-mess-manager.appspot.com",
  messagingSenderId: "645303666804",
  appId: "1:645303666804:web:b888abe7764b70b5ed6921",
  measurementId: "G-PW5NX6L99M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
