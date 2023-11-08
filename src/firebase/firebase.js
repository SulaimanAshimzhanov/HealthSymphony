

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHBnfgbVqbLXnWSA959A87AIrxk-_vHoE",
  authDomain: "final-project-f2de5.firebaseapp.com",
  projectId: "final-project-f2de5",
  storageBucket: "final-project-f2de5.appspot.com",
  messagingSenderId: "787681708824",
  appId: "1:787681708824:web:2b1f3f5acd65c9c5b02c6d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const JoinWithGoogleProvider = new GoogleAuthProvider();

export {
    auth,
    JoinWithGoogleProvider
};