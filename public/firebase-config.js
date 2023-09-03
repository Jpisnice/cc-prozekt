
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD37MTUUiQ2g1jdPRigN3vX_2DwHKxlQ20",
    authDomain: "cloudcomputing-81292.firebaseapp.com",
    projectId: "cloudcomputing-81292",
    storageBucket: "cloudcomputing-81292.appspot.com",
    messagingSenderId: "146214611497",
    appId: "1:146214611497:web:e0369673cf58918c03ca38",
    measurementId: "G-09PFV472CQ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

// Export the initialized Firebase app and auth
export { app, auth };


