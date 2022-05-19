// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIBFztC-gwDTL2FrdOO-0-P58QN_UVr_g",
  authDomain: "makerspace-2e358.firebaseapp.com",
  projectId: "makerspace-2e358",
  storageBucket: "makerspace-2e358.appspot.com",
  messagingSenderId: "868224597071",
  appId: "1:868224597071:web:e8fca4ed61acf76e867e3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export const db = firebase.firestore();
export const db = getFirestore(app);
