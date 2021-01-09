## Mobile app for valentina divers
desarrollado con redux y react-navigation

## getting started
1. Download the project
3. Type `npm install` in the source folder where `package.json` is located
4. Type `expo start` to start the development server

# Config App
1. set up se react-native/Libraries/Core/Timers/JSTimer.js
```
const FRAME_DURATION = 1000 / 10000; 
```

2. Set up on src/config/apiKey.js
 ```
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
```
1. Dashboard App
![WhatsApp Image 2021-01-08 at 21 04 04](https://user-images.githubusercontent.com/41652885/104081319-e5dc6700-51fb-11eb-9bae-f70ad8c75ea5.jpeg)
2. Managment Clients
![WhatsApp Image 2021-01-08 at 21 04 04 (2)](https://user-images.githubusercontent.com/41652885/104081334-f7257380-51fb-11eb-9acf-a50815a9f714.jpeg)
3. Config App
![WhatsApp Image 2021-01-08 at 21 04 04 (1)](https://user-images.githubusercontent.com/41652885/104081347-01477200-51fc-11eb-89c7-08e9451b3a5f.jpeg)
4. clothing management
![WhatsApp Image 2021-01-08 at 21 25 24](https://user-images.githubusercontent.com/41652885/104081364-1d4b1380-51fc-11eb-88a0-9a33c440895f.jpeg)
5. Query clothing
![WhatsApp Image 2021-01-08 at 21 25 24 (1)](https://user-images.githubusercontent.com/41652885/104081383-2e942000-51fc-11eb-88a9-2ce539e72e49.jpeg)
6. REPORT FINAL
[documento.pdf](https://github.com/oal2727/managment_react/files/5790076/documento.pdf)


