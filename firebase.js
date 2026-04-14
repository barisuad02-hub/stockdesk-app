import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3dvpOqvNbMSkVoEkt8SGyEdR7bkYpN10",
  authDomain: "stockdesk-2eb60.firebaseapp.com",
  projectId: "stockdesk-2eb60",
  storageBucket: "stockdesk-2eb60.firebasestorage.app",
  messagingSenderId: "5167483636",
  appId: "1:5167483636:web:26ab96c09e0d3b54222ca1",
  measurementId: "G-MVX9T9D2ME"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
