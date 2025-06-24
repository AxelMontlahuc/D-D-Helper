import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6q-jwfyNJtwKjcgZRyMWuoPEr44sf-ik",
  authDomain: "dnd-help.firebaseapp.com",
  projectId: "dnd-help",
  storageBucket: "dnd-help.firebasestorage.app",
  messagingSenderId: "1097972180726",
  appId: "1:1097972180726:web:b294da78642158ee3d2ed7",
  measurementId: "G-F9WHM2RL9Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };