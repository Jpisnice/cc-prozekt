// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhQ9Xiszm5nG1r0MhSMtjrbpRzPd_wXjI",
    authDomain: "moviz-c49c5.firebaseapp.com",
    projectId: "moviz-c49c5",
    storageBucket: "moviz-c49c5.appspot.com",
    messagingSenderId: "243493721479",
    appId: "1:243493721479:web:01281e10b66b8106946f22",
    measurementId: "G-FDGP4YWK7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);