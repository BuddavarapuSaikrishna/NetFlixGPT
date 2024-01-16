// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjtL9uuIYmEDCoyUPt64CYv721X-YOkJs",
  authDomain: "netflixgpt-654b9.firebaseapp.com",
  projectId: "netflixgpt-654b9",
  storageBucket: "netflixgpt-654b9.appspot.com",
  messagingSenderId: "371633932694",
  appId: "1:371633932694:web:dc255dae1093617cfa75b7",
  measurementId: "G-ZP1BRBWFXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);