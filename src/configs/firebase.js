import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKuWG5V27MKx-2R0bXnmlG-V3Tn19BHj8",
  authDomain: "react-f55d1.firebaseapp.com",
  databaseURL: "https://react-f55d1.firebaseio.com",
  projectId: "react-f55d1",
  storageBucket: "react-f55d1.appspot.com",
  messagingSenderId: "162593650017",
  appId: "1:162593650017:web:04bb06d94638742a694120",
  measurementId: "G-BDCCNG8C0F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
