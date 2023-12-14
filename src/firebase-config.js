// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGI57fTo2D7oHpoa85vn0nSaLWztal-bA",
  authDomain: "aselitto-timer.firebaseapp.com",
  projectId: "aselitto-timer",
  storageBucket: "aselitto-timer.appspot.com",
  messagingSenderId: "710737136280",
  appId: "1:710737136280:web:68189af61b42d113819eed",
  measurementId: "G-77H2YN56CE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }; // Export the app
