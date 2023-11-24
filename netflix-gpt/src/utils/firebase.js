// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrfTguK5ykU1QfdlF3Z__vLCSAGDVLlQc",
  authDomain: "netflixgpt-9e0b4.firebaseapp.com",
  projectId: "netflixgpt-9e0b4",
  storageBucket: "netflixgpt-9e0b4.appspot.com",
  messagingSenderId: "247635959168",
  appId: "1:247635959168:web:db94783ce918a12cf93565",
  measurementId: "G-QWMYF455X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);