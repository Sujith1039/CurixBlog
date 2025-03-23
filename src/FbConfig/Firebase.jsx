import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC-A_kkhvtBBvttKHDmmckgk4QrPq0iG7U",
  authDomain: "curix-blog.firebaseapp.com",
  projectId: "curix-blog",
  storageBucket: "curix-blog.firebasestorage.app",
  messagingSenderId: "886102930295",
  appId: "1:886102930295:web:919fd825e9c4d33aefe772",
  measurementId: "G-LC4PFTPXHC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);