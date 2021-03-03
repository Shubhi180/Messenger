import firebase from "firebase"


var firebaseConfig = {
  apiKey: "AIzaSyD9PvCbb2Wc4tlCL8Brw5sd3dvvnLgUjjM",
  authDomain: "facebook-messenger-clone-89244.firebaseapp.com",
  projectId: "facebook-messenger-clone-89244",
  storageBucket: "facebook-messenger-clone-89244.appspot.com",
  messagingSenderId: "351378792893",
  appId: "1:351378792893:web:d62e49fc8617e35c2372d4",
  measurementId: "G-90X0PM7ZN5"
};

  const firebaseapp =firebase.initializeApp(firebaseConfig);

  const db= firebaseapp.firestore();
  export default db;