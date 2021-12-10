import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Set the configuration for your app
const firebaseConfig = {
  apiKey: "AIzaSyCWALaDau6p3_8qQRSkVXSKXn2hWY0k6EA",
  authDomain: "motom-fabdd.firebaseapp.com",
  databaseURL: "https://motom-fabdd-default-rtdb.firebaseio.com",
  projectId: "motom-fabdd",
  storageBucket: "motom-fabdd.appspot.com",
  messagingSenderId: "798621739654",
  appId: "1:798621739654:web:eec3ade18ef9e1accabf07",
  measurementId: "G-GDJEN8LHC9",
};
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;
