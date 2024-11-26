import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'localhost-website-e47b6.firebaseapp.com',
  projectId: 'localhost-website-e47b6',
  storageBucket: 'localhost-website-e47b6.firebasestorage.app',
  messagingSenderId: '285646072497',
  appId: '1:285646072497:web:5c8e8f8cfc3a3b22145090',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
