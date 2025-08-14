// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArwF4jPmLVY5Gxflf4h1gmftf-cReCUog",
  authDomain: "al-it-course.firebaseapp.com",
  projectId: "al-it-course",
  storageBucket: "al-it-course.firebasestorage.app",
  messagingSenderId: "436259395198",
  appId: "1:436259395198:web:79a25596a23907afebea2f"
};
// import.meta.env.VITE_apiKey
// import.meta.env.VITE_authDomain
// import.meta.env.VITE_projectId
// import.meta.env.VITE_storageBucket
// import.meta.env.VITE_messagingSenderId
// import.meta.env.VITE_appId

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;