import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCX7LrRPj5-ZQXzXzgaqE-5ZjjgMaavng4",
    authDomain: "diary-49d5d.firebaseapp.com",
    databaseURL: "https://diary-49d5d.firebaseio.com",
    projectId: "diary-49d5d",
    storageBucket: "diary-49d5d.appspot.com",
    messagingSenderId: "104481585185"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();