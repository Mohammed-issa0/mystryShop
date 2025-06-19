import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk5SyB5ZBjv2OMJWnDIU1euapWSdRmuhU",
  authDomain: "mystry-e8e8a.firebaseapp.com",
  projectId: "mystry-e8e8a",
  storageBucket: "mystry-e8e8a.firebasestorage.app",
  messagingSenderId: "592198032875",
  appId: "1:592198032875:web:c7bc85e65ca52704b30dae"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


