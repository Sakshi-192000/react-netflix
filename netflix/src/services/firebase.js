import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/*const{
    VITE_APIKEY,
    VITE_AUTHDOMAIN,
    VITE_PROJECTID,
    VITE_STORAGEBUCKET,
    VITE_MESSAGESENDERID,
    VITE_APPID,
} = import.meta.env
*/
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-h8dbOo-etmEhMWf4CLpRpzJK5LzrsSA",
  authDomain: "react-netflix-3b3ed.firebaseapp.com",
  projectId: "react-netflix-3b3ed",
  storageBucket: "react-netflix-3b3ed.appspot.com",
  messagingSenderId: "554959100283",
  appId: "1:554959100283:web:9eab091f49bf078d7e85de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
