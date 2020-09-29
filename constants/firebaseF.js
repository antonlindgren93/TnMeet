import firebase from 'firebase'
import '@firebase/firestore'
const config = {
     apiKey: "AIzaSyBLa_ZYbonagomDv-0KmdoBI0N2Up0RJCY",
        authDomain: "tnmeet-8f6c5.firebaseapp.com",
        databaseURL: "https://tnmeet-8f6c5.firebaseio.com",
        projectId: "tnmeet-8f6c5",
        storageBucket: "tnmeet-8f6c5.appspot.com",
        messagingSenderId: "919756033010",
        appId: "1:919756033010:web:76c7c667bc833dd167396b",
        measurementId: "G-QKEWP68WMX"
}
class FirebaseSvc {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        } else {
            console.log("firebase apps already running...")
        }
    }
}