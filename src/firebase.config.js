

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyCwOjBN1tXYjVoJdXszP89LHx2Y7hWTPJs",
  authDomain: "harshcollection.firebaseapp.com",
  projectId: "harshcollection",
  storageBucket: "harshcollection.appspot.com",
  messagingSenderId: "636722320837",
  appId: "1:636722320837:web:39fb985efb58a9920ba7ac",
  measurementId: "G-GZEY3DQ48K"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app);



export default app;