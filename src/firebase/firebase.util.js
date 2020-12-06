import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBH2gl27Dkav2900M9tOgagI_0OmczeBq0",
  authDomain: "crwn-db-c6c37.firebaseapp.com",
  projectId: "crwn-db-c6c37",
  storageBucket: "crwn-db-c6c37.appspot.com",
  messagingSenderId: "1001177950303",
  appId: "1:1001177950303:web:71d367a392d95da1ba93ea",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select-account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
