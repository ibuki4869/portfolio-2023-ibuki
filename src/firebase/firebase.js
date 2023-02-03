import { initializeApp } from "firebase/app";
//import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

// firebaseConfigの値を元にfirebaseの初期化
const app = initializeApp(firebaseConfig);
// アナリティクスの初期化
getAnalytics(app);

//const db = getFirestore(app);
//export default db;
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;