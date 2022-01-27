import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAeMOx0MCZga3B3yVjiJhr0rsszWFq67G8",
	authDomain: "vercel01.firebaseapp.com",
	projectId: "vercel01",
	storageBucket: "vercel01.appspot.com",
	messagingSenderId: "439423037744",
	appId: "1:439423037744:web:3298165186a1c470e298f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
