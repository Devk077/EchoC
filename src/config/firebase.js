// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwR3cTfBYTi91gTjGF6Zimks5vemTNdgk",
  authDomain: "echoc-e16c2.firebaseapp.com",
  projectId: "echoc-e16c2",
  storageBucket: "echoc-e16c2.firebasestorage.app",
  messagingSenderId: "519206693680",
  appId: "1:519206693680:web:df95054b2af0a49b55f6f5",
  measurementId: "G-BLYPREPMT9",
  // add something for histing, like 
  // "hosting": {
  //   "site": "undefined",
  //   "public": "public",

  // firebase pe setup pe dekha tha
  // firebase deploy --only hosting:undefined
  // last me run this cmd
};

// Initialize Firebase
let app;
if (!initializeApp.apps.length) {
  app = initializeApp(firebaseConfig);
}
const analytics = getAnalytics(app);
export { app, auth };

/*
Step 3: Add google-services.json (Android) & GoogleService-Info.plist (iOS)
For Android:
Go to Firebase Console → Project Settings → General.
Scroll down to Your Apps and click Download google-services.json.
Place it inside:
bash
Copy
Edit
android/app/google-services.json
 */