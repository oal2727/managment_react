## Mobile app for valentina divers
desarrollado con redux y react-navigation

## getting started
1. Download the project
3. Type `npm install` in the source folder where `package.json` is located
4. Type `expo start` to start the development server

# Config App
- Set up on src/config/apiKey.js
//uso de proyecto en firebase "managment"
//cambie firebase  firebase/app por
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
var firebaseConfig = {
    apiKey: *********************,
    authDomain: *********************,
    databaseURL: *********************",
    projectId: *********************,
    storageBucket: *********************,
    messagingSenderId: *********************,
    appId: *********************,
    measurementId: *********************
  };
firebase.initializeApp(firebaseConfig);
firebase.database.ServerValue.TIMESTAMP
export {firebase}
