import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyC3dvpOqvNbMSkVoEkt8SGyEdR7bkYpN10",
  authDomain: "stockdesk-2eb60.firebaseapp.com",
  projectId: "stockdesk-2eb60",
  storageBucket: "stockdesk-2eb60.firebasestorage.app",
  messagingSenderId: "5167483636",
  appId: "1:5167483636:web:26ab96c09e0d3b54222ca1",
  measurementId: "G-MVX9T9D2ME"
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export default app;
