import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDJvuG8-9fq93tVOAS0vnhbAUETjjG9Jh4",
  authDomain: "independent-jonikumardas.firebaseapp.com",
  projectId: "independent-jonikumardas",
  storageBucket: "independent-jonikumardas.appspot.com",
  messagingSenderId: "897391983600",
  appId: "1:897391983600:web:a88dedd4ed76d23d757b35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
export default Auth;