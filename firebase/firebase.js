import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcXuflaQd4GfoqyTiBqQp99Tazbfnq2Q0",
  authDomain: "next-chat-app-fef8e.firebaseapp.com",
  projectId: "next-chat-app-fef8e",
  storageBucket: "next-chat-app-fef8e.appspot.com",
  messagingSenderId: "350202439642",
  appId: "1:350202439642:web:acd6c9eaa114f6cc29c2e3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
