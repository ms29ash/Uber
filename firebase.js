// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_Jdmv1t8TfFqz5OgBrTcwQHOJhX0TCSQ",
    authDomain: "uber-clone-1e30c.firebaseapp.com",
    databaseURL: "https://uber-clone-1e30c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "uber-clone-1e30c",
    storageBucket: "uber-clone-1e30c.appspot.com",
    messagingSenderId: "137593063355",
    appId: "1:137593063355:web:bc3287ef757945ac65a69e",
    measurementId: "G-YXW2KQHJXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };

