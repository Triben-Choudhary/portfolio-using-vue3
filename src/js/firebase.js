import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxTNUZJVOM-ubCcktIQdXWVCNj78-D3P0",
  authDomain: "portfolio-5c758.firebaseapp.com",
  projectId: "portfolio-5c758",
  storageBucket: "portfolio-5c758.appspot.com",
  messagingSenderId: "863797362075",
  appId: "1:863797362075:web:7818e4f2647517c412753e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage}