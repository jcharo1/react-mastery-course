// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVHs4-_pe8BDtTGZ4LG_uJkRVyLj6uTew",
  authDomain: "pokemonbinder-e02d5.firebaseapp.com",
  projectId: "pokemonbinder-e02d5",
  storageBucket: "pokemonbinder-e02d5.appspot.com",
  messagingSenderId: "236599399739",
  appId: "1:236599399739:web:fb2b5c234f6f7f26ddd31e",
  measurementId: "G-5LQ4R166HB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage();
