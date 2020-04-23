const firebaseAdmin = require("firebase-admin");
const firebase = require("firebase");

//storage
const serviceAccount = require("../credentials/firebase_credential.json");
// Initialize FirebaseAdmin
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://haurient-1.firebaseio.com"
});

let firebaseConfig = {
  apiKey: "AIzaSyCICfOgrPIx7CAuCAZVH69T5tetvEF-OO0",
  authDomain: "haurient-1.firebaseapp.com",
  databaseURL: "https://haurient-1.firebaseio.com",
  projectId: "haurient-1",
  storageBucket: "haurient-1.appspot.com",
  messagingSenderId: "532943464490",
  appId: "1:532943464490:web:b9423253afd5018e243b53",
  measurementId: "G-C3DC2VZ6VS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = {
  firebaseAdmin: firebaseAdmin,
  firebase: firebase
}