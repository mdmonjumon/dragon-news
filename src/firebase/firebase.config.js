// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvN3ot90AA4X5tDu2__sIN-SVPZWo4OLc",
  authDomain: "dragon-news-2868c.firebaseapp.com",
  projectId: "dragon-news-2868c",
  storageBucket: "dragon-news-2868c.firebasestorage.app",
  messagingSenderId: "115888653323",
  appId: "1:115888653323:web:bdc95e1da2f5f7aac8730e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);