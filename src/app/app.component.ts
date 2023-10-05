import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pirateCove';
}


//PLACEHOLDER POSITION FOR NOW
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5I7NShfPnkMlOl3XxFw_7V-oNL2njhD0",
  authDomain: "pirate-cove-53618.firebaseapp.com",
  projectId: "pirate-cove-53618",
  storageBucket: "pirate-cove-53618.appspot.com",
  messagingSenderId: "59882613180",
  appId: "1:59882613180:web:a2d522e759ecec260963b9",
  measurementId: "G-17EXH0XZQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
