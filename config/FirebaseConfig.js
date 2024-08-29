// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTn6tg5-ijXW6kBvAjjU0mH0yj7rnSruQ",
  authDomain: "ai-travel-planner-97e0c.firebaseapp.com",
  projectId: "ai-travel-planner-97e0c",
  storageBucket: "ai-travel-planner-97e0c.appspot.com",
  messagingSenderId: "871150511268",
  appId: "1:871150511268:web:3a87775f2b4e2724e17231",
  measurementId: "G-4WJV8TJDW8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// const analytics = getAnalytics(app);
