import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBLHQWBxRX3bKydGtPS-LJmBkJYt6Iqd-8",
    authDomain: "opalytica-case.firebaseapp.com",
    projectId: "opalytica-case",
    storageBucket: "opalytica-case.appspot.com",
    messagingSenderId: "290070834675",
    appId: "1:290070834675:web:b3c4ae7d37a24d854e3686"
  };

  export default firebase.initializeApp(firebaseConfig);