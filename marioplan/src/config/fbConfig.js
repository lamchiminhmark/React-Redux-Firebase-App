import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAe032QooD1fqNeX3T-Lg7L4w0CYskK6Pk",
    authDomain: "marioplan-b4c9c.firebaseapp.com",
    databaseURL: "https://marioplan-b4c9c.firebaseio.com",
    projectId: "marioplan-b4c9c",
    storageBucket: "marioplan-b4c9c.appspot.com",
    messagingSenderId: "905842430680"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;