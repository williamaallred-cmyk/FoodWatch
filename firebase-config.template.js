// Firebase Configuration Template for Netlify
// This file will be used in production (committed to GitHub)
// Netlify will inject the real values via environment variables

const __firebase_config = JSON.stringify({
    apiKey: window.NETLIFY_FIREBASE_API_KEY || "YOUR_API_KEY_HERE",
    authDomain: window.NETLIFY_FIREBASE_AUTH_DOMAIN || "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: window.NETLIFY_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
    storageBucket: window.NETLIFY_FIREBASE_STORAGE_BUCKET || "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: window.NETLIFY_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
    appId: window.NETLIFY_FIREBASE_APP_ID || "YOUR_APP_ID"
});

const __app_id = window.NETLIFY_APP_ID || "default-app-id";
const __initial_auth_token = null;
