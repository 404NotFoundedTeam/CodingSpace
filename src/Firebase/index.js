import { initializeApp } from "firebase/app";

import { firebaseConfig } from "./config";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
} from "firebase/auth";

import { getDatabase } from "firebase/database";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth();

const createUser = (userData, password) => {
  createUserWithEmailAndPassword(auth, userData.email, password)
    .then((cred) => {
      sendEmailVerification(auth.currentUser).then((data) => {
        console.log(data + "sent");
        alert("message sent");
        // Email verification sent!
        // ...
      });
      console.log(cred.user);
    })
    .catch((err) => {
      console.log(err);
    });
};

function signInF(dataUser) {
  signInWithEmailAndPassword(auth, dataUser.email, dataUser.password)
    .then((cred) => {
      console.log("sign in");
    })
    .catch(() => {
      alert("parol yoki email xato");
    });
}

export { createUser, signInF };
