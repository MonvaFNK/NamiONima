import React from 'react';
import ReactDOM from 'react-dom/client';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './index.css';
import "./Stylesheets.js"
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDsa9FC6h0zTAKZJkZldVg3CukUVYhP5UM",

  authDomain: "namionima-32d6b.firebaseapp.com",

  projectId: "namionima-32d6b",

  storageBucket: "namionima-32d6b.appspot.com",

  messagingSenderId: "248009350132",

  appId: "1:248009350132:web:09272796189f3d768f37a1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
