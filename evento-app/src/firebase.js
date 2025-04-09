// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNUmXkqWwrrQ-uX8hPGI2Kh5ZjrrhdDp0",
  authDomain: "jaquipablo-56c59.firebaseapp.com",
  projectId: "jaquipablo-56c59",
  storageBucket: "jaquipablo-56c59.appspot.com", // OJO: le faltaba ".appspot.com"
  messagingSenderId: "680766929467",
  appId: "1:680766929467:web:ea296f0fd7a93339183a1e"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
