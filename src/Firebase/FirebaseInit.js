// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4IjAIUktAdAOR7Wo1VPBAmHkI3xDAE1c",
  authDomain: "azir-firebase-learn.firebaseapp.com",
  projectId: "azir-firebase-learn",
  storageBucket: "azir-firebase-learn.appspot.com",
  messagingSenderId: "466986586626",
  appId: "1:466986586626:web:352bece4759dd4f33bcd1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;