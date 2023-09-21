import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDU4OAvbw34Iu8rfT-fmgtcBRs7v05vhmA",
  authDomain: "pragati-7647c.firebaseapp.com",
  projectId: "pragati-7647c",
  storageBucket: "pragati-7647c.appspot.com",
  messagingSenderId: "73056724166",
  appId: "1:73056724166:web:e61b57b87e2591575363c7",
  measurementId: "G-KGPYF74NDX"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app,auth};

