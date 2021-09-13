import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCFOJH5_zj4eAglzqcG4_ZY6StXhPnq1fk",
    authDomain: "portalaluno-faa1c.firebaseapp.com",
    projectId: "portalaluno-faa1c",
    storageBucket: "portalaluno-faa1c.appspot.com",
    messagingSenderId: "494160703640",
    appId: "1:494160703640:web:ec4113b13f81dad296e0ed"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);