// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDicbqVKiLUz1jHXkWWbd1Hy5qCJkUQYlo",
  authDomain: "comfy-text-project.firebaseapp.com",
  projectId: "comfy-text-project",
  storageBucket: "comfy-text-project.appspot.com",
  messagingSenderId: "613925891831",
  appId: "1:613925891831:web:0c29c8eb2b123bd393edf2",
  measurementId: "G-XXW506G3QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const SignupWithGoogle = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
export const logOut = () => {
  signOut(auth)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};