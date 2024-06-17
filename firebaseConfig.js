// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmFJQSmTjhWcuVsgsqdo-dm_CRvB4setI",
  authDomain: "sign-in-route-finder.firebaseapp.com",
  projectId: "sign-in-route-finder",
  storageBucket: "sign-in-route-finder.appspot.com",
  messagingSenderId: "346143411697",
  appId: "1:346143411697:web:576dab060a1d33e5fac850"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// android: 875717122798-1emv18n9sr8p57dg52p995bn2lp8f5ir.apps.googleusercontent.com