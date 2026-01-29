import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXLXx9J5ckOYaCe2ayMGQrUQ0-eNLlDrY",
  authDomain: "mrkorntour.firebaseapp.com",
  projectId: "mrkorntour",
  storageBucket: "mrkorntour.appspot.com",
  messagingSenderId: "442020356639",
  appId: "1:442020356639:web:d8056de98fae751860eb2a",
  measurementId: "G-4CMG08YHZE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
