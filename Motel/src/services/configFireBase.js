
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC4kDN2bnlcVig5KPNvMchWdCHTGcQnCYc",
    authDomain: "motel-cf1ff.firebaseapp.com",
    databaseURL: "https://motel-cf1ff.firebaseio.com",
    projectId: "motel-cf1ff",
    storageBucket: "motel-cf1ff.appspot.com",
    messagingSenderId: "998398518464",
    appId: "1:998398518464:web:0bcb13e502c45558773925",
    measurementId: "G-GH9M0VSL92"
  };
export const firebasesApp = firebase.initializeApp(firebaseConfig);
