import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBkUCaJLzUKNpkCWf3AUJ9xuk-VTSmIbq4",
    authDomain: "social-club-41147.firebaseapp.com",
    projectId: "social-club-41147",
    storageBucket: "social-club-41147.appspot.com",
    messagingSenderId: "684648823927",
    appId: "1:684648823927:web:6b4533bd2ad607f8d89a72",
  })
  .auth();
