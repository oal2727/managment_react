import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
var firebaseConfig = {
     apiKey: *********************,
    authDomain: *********************,
    databaseURL: *********************,
    projectId: *********************,
    storageBucket: *********************,
    messagingSenderId: *********************,
    appId: *********************,
    measurementId: *********************
  };
firebase.initializeApp(firebaseConfig);
firebase.database.ServerValue.TIMESTAMP
export {firebase}
    