import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5_FXTG6_I8g62-wuESE1KAwY67HTIZp8",
  authDomain: "mi-turno-app-dc1fe.firebaseapp.com",
  projectId: "mi-turno-app-dc1fe",
  storageBucket: "mi-turno-app-dc1fe.appspot.com",
  messagingSenderId: "418110337665",
  appId: "1:418110337665:web:3cacc70f281d8cd3489380"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export{
    db,
    firebaseApp,
}
    