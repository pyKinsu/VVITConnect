import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVZuqw3qB-Lv1yWw0uSlxGJvGv42vbhl4",
  authDomain: "quizappvv.firebaseapp.com",
  projectId: "quizappvv",
  storageBucket: "quizappvv.firebasestorage.app",
  messagingSenderId: "810254967536",
  appId: "1:810254967536:web:58f692e134bc7c63961835",
  measurementId: "G-9WGBGT23NV"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
