import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUkJIqmar5DIhIezrx0tD3v27oXcEp-Ho",
  authDomain: "read-75b26.firebaseapp.com",
  databaseURL:
    "https://read-75b26-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "read-75b26",
  storageBucket: "read-75b26.firebasestorage.app",
  messagingSenderId: "441487145421",
  appId: "1:441487145421:web:cb06f12157b94db9ff2c84",
  measurementId: "G-QH5YZEE8F8",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
