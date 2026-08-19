import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyB7qZaOR8YuM00vWqsr0fq8Rw6UMaLWgWA",
  authDomain: "stevens-university-4f6ea.firebaseapp.com",
  projectId: "stevens-university-4f6ea",
  storageBucket: "stevens-university-4f6ea.firebasestorage.app",
  messagingSenderId: "621087391900",
  appId: "1:621087391900:web:e7d0bf8f04fd03a9d1ad59"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
