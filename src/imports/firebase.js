import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
var firebaseConfig = {
  apiKey: "AIzaSyBclRqQlcTS_HN6Zr466nzNMzauO_NwkqI",
  authDomain: "turbo-menu.firebaseapp.com",
  databaseURL: "https://turbo-menu.firebaseio.com",
  projectId: "turbo-menu",
  storageBucket: "turbo-menu.appspot.com",
  messagingSenderId: "570866613735",
  appId: "1:570866613735:web:eda6d13a5a9c172b2e9142",
  measurementId: "G-L9WKYFQ172",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
