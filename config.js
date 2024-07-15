import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyDSIAxytRuG_2MYNud4XJqD0E1D4ZCaEPU",
  authDomain: "ride-app-f10d7.firebaseapp.com",
  projectId: "ride-app-f10d7",
  storageBucket: "ride-app-f10d7.appspot.com",
  messagingSenderId: "427014195470",
  appId: "1:427014195470:web:5a23a7d95e01a255deef5f"
};



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

