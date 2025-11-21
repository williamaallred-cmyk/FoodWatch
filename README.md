# FoodWatch - Gut Symptom Tracker

A personal web application to track food consumption and associated gut symptoms, helping identify trigger foods that cause digestive issues.

## Features

- 🍽️ Log foods and symptoms in real-time
- 📊 Automatic trigger analysis (identifies high-risk foods)
- ✅ Track safe foods with 0% symptom rate
- 🔥 Firebase backend for persistent data storage
- 📱 Responsive design with Tailwind CSS

## Setup Instructions

### 1. Firebase Configuration

1. Copy `firebase-config.js` (which is gitignored) and add your actual Firebase credentials:

```javascript
const __firebase_config = JSON.stringify({
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
});

const __app_id = "your-app-identifier";
const __initial_auth_token = null;
```

2. Get your Firebase credentials from:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Go to Project Settings > General > Your apps
   - Copy the config object

### 2. Local Development

Simply open `FoodWatch.html` in your browser. The app will work locally as long as `firebase-config.js` is properly configured.

### 3. Deploy to Netlify

#### Option A: Drag and Drop (Easiest)
1. Make sure `firebase-config.js` has your real credentials
2. Go to [Netlify](https://netlify.com)
3. Drag the folder into the Netlify deploy zone
4. Done!

#### Option B: GitHub Integration (Recommended for updates)
1. Push this repo to GitHub (see below)
2. Connect Netlify to your GitHub repo
3. Netlify will auto-deploy on every push

### 4. Push to GitHub

```powershell
# Initialize git repository
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: FoodWatch gut symptom tracker"

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/foodwatch.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** The `.gitignore` file ensures `firebase-config.js` is NOT pushed to GitHub (it contains sensitive API keys).

## Security Notes

- `firebase-config.js` is gitignored and contains your actual Firebase credentials
- `firebase-config.template.js` is committed as a reference template
- For production, consider implementing Firebase App Check and security rules
- The app uses anonymous authentication - all users share the same data namespace

## Firebase Security Rules

Add these rules to your Firebase Firestore to secure your data:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /artifacts/{appId}/users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Tech Stack

- HTML5
- JavaScript (ES6 Modules)
- Tailwind CSS (CDN)
- Firebase (Authentication & Firestore)

## License

Personal project - use as you wish!
