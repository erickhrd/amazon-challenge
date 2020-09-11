import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_K1b3xCQBOG1x5VlV-AVzCjbmDJ6Fy-0",
    authDomain: "challenge-8399f.firebaseapp.com",
    databaseURL: "https://challenge-8399f.firebaseio.com",
    projectId: "challenge-8399f",
    storageBucket: "challenge-8399f.appspot.com",
    messagingSenderId: "889865902870",
    appId: "1:889865902870:web:d08263e15c7031a2058e37",
    measurementId: "G-62TQC641CE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };