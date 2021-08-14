import firebase from "firebase/app";
import "firebase/auth";
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpXz1zwypP1t3CCbwESLMBWw8z3X40sps",
    authDomain: "digitallyinclined-ecommerce.firebaseapp.com",
    projectId: "digitallyinclined-ecommerce",
    storageBucket: "digitallyinclined-ecommerce.appspot.com",
    messagingSenderId: "767339895733",
    appId: "1:767339895733:web:75b50657cc367494d9d7fc",
    measurementId: "G-P6YGB56M42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // export 
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();