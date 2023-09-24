// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfIfY8pQm5OaEt9kMt9rUcrI1D6BRtImQ",
  authDomain: "gainz-3e868.firebaseapp.com",
  projectId: "gainz-3e868",
  storageBucket: "gainz-3e868.appspot.com",
  messagingSenderId: "387569157203",
  appId: "1:387569157203:web:7b1a81bc0798c390adf2a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// signInWithPopup(auth, provider)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
};

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
