import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyDueujXcVK9QYDBOPPRmUARhDGWIHftUbA",
    authDomain: "massenger-z.firebaseapp.com",
    projectId: "massenger-z",
    storageBucket: "massenger-z.appspot.com",
    messagingSenderId: "595494259355",
    appId: "1:595494259355:web:feed732a9bf881340d543e",
    measurementId: "G-R4RPWXP37N"
  };

  const firebaseapp =firebase.initializeApp(firebaseConfig);

  const db= firebaseapp.firestore();
  export default db;