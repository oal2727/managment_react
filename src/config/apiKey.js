//uso de proyecto en firebase "managment"
//cambie firebase  firebase/app por
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
var firebaseConfig = {
    apiKey: "*********************",
    authDomain: "*********************",
    databaseURL: "*******************",
    projectId: "*******************",
    storageBucket: "*******************",
    messagingSenderId: "*******************",
    appId: "*******************",
    measurementId: "*******************"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//añadir timestamp
firebase.database.ServerValue.TIMESTAMP
export {firebase}

