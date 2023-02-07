
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB-0zZA6yCLQhCUOCsv7Agqtpd1trNVVpU",
  authDomain: "secquraise-b57d6.firebaseapp.com",
  databaseURL: "https://secquraise-b57d6-default-rtdb.firebaseio.com",
  projectId: "secquraise-b57d6",
  storageBucket: "secquraise-b57d6.appspot.com",
  messagingSenderId: "596898470696",
  appId: "1:596898470696:web:33676fdf986949b35a8e1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);