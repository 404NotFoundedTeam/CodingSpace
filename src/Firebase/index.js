import { initializeApp } from "firebase/app";

import { firebaseConfig } from "./config";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { getDatabase } from "firebase/database";

import { isVerified } from "../Consts/consts";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth();
const provider = new GoogleAuthProvider();

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

console.log(isVerified);

function signInF(dataUser) {
  signInWithEmailAndPassword(auth, dataUser.email, dataUser.password)
    .then((cred) => {
      console.log("sign in");
      console.log(cred.user);
    })
    .catch(() => {
      alert("parol yoki email xato");
    });
}

function signUpWithG() {
  console.log("With Google");
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user, credential, token);
      console.log("google sign up ulandi");
      console.log(result);
      // ...
    })
    .catch((error) => {
      console.log(error);
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // console.log(error);
      // ...
    });
}

export { createUser, signInF, signUpWithG };
