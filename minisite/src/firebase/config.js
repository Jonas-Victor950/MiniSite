// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzBzj97SHOkn875q8pnF4IdI4iHW-59XE",
  authDomain: "minisite-ef393.firebaseapp.com",
  projectId: "minisite-ef393",
  storageBucket: "minisite-ef393.appspot.com",
  messagingSenderId: "70243025913",
  appId: "1:70243025913:web:fd455935e320c9a999b328"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}