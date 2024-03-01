import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAoU6a3hQRRVnn95p68ODY9BLW5ZmLvIWU",
    authDomain: "candidate0340project1.firebaseapp.com",
    projectId: "candidate0340project1",
    storageBucket: "candidate0340project1.appspot.com",
    messagingSenderId: "780595345605",
    appId: "1:780595345605:web:8b87fc02e3bdf003e458ac"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };