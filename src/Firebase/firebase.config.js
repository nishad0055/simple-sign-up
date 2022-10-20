// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAec41uyHiC8FsSTjxVfgOOaJQ1q2tcSKU",
  authDomain: "simple-signing.firebaseapp.com",
  projectId: "simple-signing",
  storageBucket: "simple-signing.appspot.com",
  messagingSenderId: "1085839852313",
  appId: "1:1085839852313:web:7b05f37ccc843b800ebb88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;