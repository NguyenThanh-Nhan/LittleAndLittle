// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI9WSA6h9Q_YOZgv7eeOAtFdQQnzyKPAE",
  authDomain: "little-and-little-195b1.firebaseapp.com",
  projectId: "little-and-little-195b1",
  storageBucket: "little-and-little-195b1.appspot.com",
  messagingSenderId: "733151012657",
  appId: "1:733151012657:web:89226ea50a2c81edddf210",
  measurementId: "G-F3R01H0H3F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };