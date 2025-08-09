import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Fallback Firebase config (your actual values)
const fallbackConfig = {
  apiKey: "AIzaSyC4_y-Z5avek2_XzW_aEPiT0w4EPQCutw0",
  authDomain: "hip-transducer-468401-h2.firebaseapp.com",
  databaseURL: "https://hip-transducer-468401-h2-default-rtdb.firebaseio.com",
  projectId: "hip-transducer-468401-h2",
  storageBucket: "hip-transducer-468401-h2.firebasestorage.app",
  messagingSenderId: "989174107256",
  appId: "1:989174107256:web:a2b287682aa5e606ebf18d",
  measurementId: "G-9RB7KL55TC",
};

// Try to get config from environment variables, fallback to hardcoded values
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || fallbackConfig.apiKey,
  authDomain:
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || fallbackConfig.authDomain,
  databaseURL:
    process.env.REACT_APP_FIREBASE_DATABASE_URL || fallbackConfig.databaseURL,
  projectId:
    process.env.REACT_APP_FIREBASE_PROJECT_ID || fallbackConfig.projectId,
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ||
    fallbackConfig.storageBucket,
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ||
    fallbackConfig.messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_APP_ID || fallbackConfig.appId,
  measurementId:
    process.env.REACT_APP_FIREBASE_MEASUREMENT_ID ||
    fallbackConfig.measurementId,
};

// Check if we're using fallback config
if (!process.env.REACT_APP_FIREBASE_API_KEY) {
  console.warn(
    "Using fallback Firebase configuration. Environment variables not loaded."
  );
}

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase:", error);
  // Final fallback to prevent crashes
  try {
    app = initializeApp(fallbackConfig);
    console.log("Firebase initialized with fallback config");
  } catch (fallbackError) {
    console.error(
      "Failed to initialize Firebase even with fallback:",
      fallbackError
    );
    throw fallbackError;
  }
}

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
