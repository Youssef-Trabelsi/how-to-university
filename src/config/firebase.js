// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDzZn4Fu196C6CWPsATMp1UtC6CyiUmCHI",
  authDomain: "how-to-university.firebaseapp.com",
  projectId: "how-to-university",
  storageBucket: "how-to-university.appspot.com",
  messagingSenderId: "527743278318",
  appId: "1:527743278318:web:174a7eb56a96c919f567ff",
  measurementId: "G-31CVCYZQH7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();