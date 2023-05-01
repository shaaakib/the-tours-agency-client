// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAZPRjRPraWci0WHn4bKz80R_gme9mC3r8',
  authDomain: 'the-tours-agency.firebaseapp.com',
  projectId: 'the-tours-agency',
  storageBucket: 'the-tours-agency.appspot.com',
  messagingSenderId: '605662384154',
  appId: '1:605662384154:web:f7288edbff2d7e6fd981a3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
