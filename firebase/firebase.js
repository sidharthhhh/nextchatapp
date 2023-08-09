import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZE-7pgeMc6g5sahQhZY9sWx5VhjF1fwM",
  authDomain: "chatapp-e9f45.firebaseapp.com",
  projectId: "chatapp-e9f45",
  storageBucket: "chatapp-e9f45.appspot.com",
  messagingSenderId: "14404146429",
  appId: "1:14404146429:web:b622625f8068d357f5da94"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
