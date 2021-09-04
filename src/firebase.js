import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAypGRComENrZnoAx2vtS7T9ADqWAbGZ_4",
  authDomain: "fir-f5444.firebaseapp.com",
  projectId: "fir-f5444",
  storageBucket: "fir-f5444.appspot.com",
  messagingSenderId: "531157674297",
  appId: "1:531157674297:web:c1dbf34b63f65492ce20e8",
  measurementId: "G-1L1EQETML9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

