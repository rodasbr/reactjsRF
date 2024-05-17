import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const FireBaseConfig = {
  apiKey: "AIzaSyDf7iTKkTVpy09q1MliIsYqhWh8VhIo7aQ",
  authDomain: "racefuels24.firebaseapp.com",
  projectId: "racefuels24",
  storageBucket: "racefuels24.appspot.com",
  messagingSenderId: "1095816874361",
  appId: "1:1095816874361:web:57e71f4f346b55463dc7a8",
  measurementId: "G-EJJK4LYXH2",
};

// Initialize Firebase
const app = initializeApp(FireBaseConfig);

export const db = getFirestore(app);
