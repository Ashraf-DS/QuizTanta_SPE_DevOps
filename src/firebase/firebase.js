import firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/analytics'
import { auth } from "firebase";
const firebaseConfig = {
	apiKey: ${REACT_APP_API_KEY},
	authDomain: ${REACT_APP_AUTH_DOMAIN},
	projectId:  ${REACT_APP_PROJECT_ID},
	storageBucket: ${REACT_APP_STORAGE_BUCKET},
	messagingSenderId: ${REACT_APP_SENDER_ID},
	appId: ${REACT_APP_APP_ID}
};
  
// apiKey: "AIzaSyBWXFGj6AHAMGo_sO1cTy_E1oknPL7vKRY",
// 	authDomain: "quiztantra.firebaseapp.com",
// 	projectId: "quiztantra",
// 	storageBucket: "quiztantra.appspot.com",
// 	messagingSenderId: "153376884651",
// 	appId: "1:153376884651:web:a087f3949faa28906934ee"

//apiKey: "AIzaSyBWXFGj6AHAMGo_sO1cTy_E1oknPL7vKRY",
//  authDomain: "quiztantra.firebaseapp.com",
//  projectId: "quiztantra",
//  storageBucket: "quiztantra.appspot.com",
//  messagingSenderId: "153376884651",
//  appId: "1:153376884651:web:a087f3949faa28906934ee",
//  measurementId: "G-VK24E3KVKP"

firebase.initializeApp(firebaseConfig);
//firebase.analytics();
//firebase.auth();

export default firebase;