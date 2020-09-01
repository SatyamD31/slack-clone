import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCCHGMhR__NqTcI1KcqpnVma312BTmHzwQ",
    authDomain: "slack-clone-580de.firebaseapp.com",
    databaseURL: "https://slack-clone-580de.firebaseio.com",
    projectId: "slack-clone-580de",
    storageBucket: "slack-clone-580de.appspot.com",
    messagingSenderId: "44811769718",
    appId: "1:44811769718:web:495d882ef34ad851518c57",
    measurementId: "G-TREE5MJD06"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;