import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBSD7SIA8DhznrUTsV0n1871QKndIOlbaA",
    authDomain: "fir-react-crud-6ac4d.firebaseapp.com",
    databaseURL: "https://fir-react-crud-6ac4d.firebaseio.com",
    projectId: "fir-react-crud-6ac4d",
    storageBucket: "fir-react-crud-6ac4d.appspot.com",
    messagingSenderId: "835580431817",
    appId: "1:835580431817:web:14396d03c600f0142f6c18"

};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;