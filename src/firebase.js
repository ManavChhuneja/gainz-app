// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // importing auth and related services
import { getFirestore } from "firebase/firestore"; // importing firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfIfY8pQm5OaEt9kMt9rUcrI1D6BRtImQ",
  authDomain: "gainz-3e868.firebaseapp.com",
  projectId: "gainz-3e868",
  storageBucket: "gainz-3e868.appspot.com",
  messagingSenderId: "387569157203",
  appId: "1:387569157203:web:446c9adb2cbc7dc5adf2a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// defining the sign in with google function to be used within UI components
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("");
    })
    .catch((error) => {
      console.error(error);
    });
};

// defining the signOut function
export const signOut = () => {
  auth
    .signOut()
    .then((success) => {
      console.log("Signed out successfully");
    })
    .catch((err) => {
      console.log("Error signing out");
    });
};
