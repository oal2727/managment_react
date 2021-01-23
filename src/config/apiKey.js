//uso de proyecto en firebase "managment"
//cambie firebase  firebase/app por
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
var firebaseConfig = {
    apiKey: "AIzaSyCiPEiAFF3e9pImoYPW9qjTqGtrg7qpZR4",
    authDomain: "managment-3e95d.firebaseapp.com",
    databaseURL: "https://managment-3e95d.firebaseio.com",
    projectId: "managment-3e95d",
    storageBucket: "managment-3e95d.appspot.com",
    messagingSenderId: "1079495218764",
    appId: "1:1079495218764:web:2fa50134e5dddb175486e9",
    measurementId: "G-532V0Z5KP3"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//añadir timestamp
firebase.database.ServerValue.TIMESTAMP
export {firebase}
