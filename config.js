import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBcfhLARJqvDuBL4RPeVCzcKhsP_Zqg8iM",
  authDomain: "booksanta-6da71.firebaseapp.com",
  projectId: "booksanta-6da71",
  storageBucket: "booksanta-6da71.appspot.com",
  messagingSenderId: "1016957851233",
  appId: "1:1016957851233:web:ff03ffe68af2b2c6f4bc20"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();