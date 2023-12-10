import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDpkpUMhx12G1pRf2e51dKOJ3CISKqLb9s",
	authDomain: "estate-2aef8.firebaseapp.com",
	databaseURL:
		"https://estate-2aef8-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "estate-2aef8",
	storageBucket: "estate-2aef8.appspot.com",
	messagingSenderId: "920541315285",
	appId: "1:920541315285:web:b4cd52c2bd09bcf501a25c",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase();
// initialise firebase authentication and get a ref to the service
export const auth = getAuth(app);
