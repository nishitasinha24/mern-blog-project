// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-project-b2871.firebaseapp.com",
  projectId: "mern-blog-project-b2871",
  storageBucket: "mern-blog-project-b2871.appspot.com",
  messagingSenderId: "928572351988",
  appId: "1:928572351988:web:61716465b03c4e8eaa05a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

