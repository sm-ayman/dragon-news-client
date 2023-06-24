// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABcBIE7wRCIFeU0xqP9CvKs9JlHoKH8GI",
  authDomain: "dragon-news-9ab9e.firebaseapp.com",
  projectId: "dragon-news-9ab9e",
  storageBucket: "dragon-news-9ab9e.appspot.com",
  messagingSenderId: "539097929874",
  appId: "1:539097929874:web:c55b6969756737f621ae4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;