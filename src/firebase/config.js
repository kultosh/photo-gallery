import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBew_4WUGsrq6eHF4lXa8tMA9EOY95Y_04",
  authDomain: "kultosh-photogram.firebaseapp.com",
  databaseURL: "https://kultosh-photogram.firebaseio.com",
  projectId: "kultosh-photogram",
  storageBucket: "kultosh-photogram.appspot.com",
  messagingSenderId: "117201684694",
  appId: "1:117201684694:web:d7859648b1bffaecb52177"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
