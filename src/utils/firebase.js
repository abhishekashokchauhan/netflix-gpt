// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWpe4tT5JpOddy-icpiA3G6frEYlnsr5Q",
  authDomain: "netflixgpt-1d672.firebaseapp.com",
  projectId: "netflixgpt-1d672",
  storageBucket: "netflixgpt-1d672.appspot.com",
  messagingSenderId: "573222771320",
  appId: "1:573222771320:web:208cfb60849518b0402b8d",
  measurementId: "G-4KJWM4N8XR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
