import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBnYkqYXse5rLtqm8LYs44g0seSbblw6FA",
  authDomain: "kfir-portfolio.firebaseapp.com",
  databaseURL: "https://kfir-portfolio-default-rtdb.firebaseio.com",
  projectId: "kfir-portfolio",
  storageBucket: "kfir-portfolio.appspot.com",
  messagingSenderId: "352721686414",
  appId: "1:352721686414:web:a3f37f049b9a290b89dedf",
  measurementId: "G-TYZ56NKRDD",
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);
