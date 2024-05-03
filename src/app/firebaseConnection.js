// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARegYWvQuUHahUmts9jnD5Hlf4Yl6zJ4s",
  authDomain: "portifolio-jacare.firebaseapp.com",
  projectId: "portifolio-jacare",
  storageBucket: "portifolio-jacare.appspot.com",
  messagingSenderId: "858288479017",
  appId: "1:858288479017:web:7415ccb13628d23e4c3538",
  measurementId: "G-G8QVRMKYDC"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db }