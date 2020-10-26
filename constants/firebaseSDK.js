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

    observeAuth = () => {
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    }
    onAuthStateChanged = user => {
        if (!user) {
            try {
                this.login(user);
            } catch ({ message }) {
                console.log("Failed:" + message)
            }
        } else {
            console.log("Reusing auth...");
        }
    }
    authData = (email) => {
        firebase
            .database()
            .ref('users')
            .orderByChild('emailAddress')
            .equalTo(email)
            .once('value', snap => console.log('this is authantcation data==> ' + snap.val()))
    }

    usersData = () => {
        let all = []
        return new Promise((resolve, reject) => {
            var docRef = firebase.firestore().collection("chatie_user")
            docRef.get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    all.push(doc.data())
                }, resolve(all))
            })
        })
    }
    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
    get ref() {
        return firebase.database().ref('chat_messages');
    }

    refOn = () => {
        return new Promise((resolve, reject) => {
            let cData = []
            this.ref.on('child_added', function (snapshot) {
                const { timestamp: numberStamp, text, user, name, femail, fid } = snapshot.val();
                const { key: id } = snapshot;
                const { key: _id } = snapshot;
                const timestamp = new Date(numberStamp);
                const message = {
                    femail,
                    fid,
                    text,
                    timestamp,
                    user
                };
                cData.push(message)
                resolve(cData)
            })
        })
    }

    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }

    send = (fid, femail, text, uid, uemail, uname) => {
        firebase.database().ref('chat_messages/').push({
            'fid': fid,
            'femail': femail,
            'text': text,
            user: {
                'uid': uid,
                'uemail': uemail,
                'uname': uname
            }

        }).then((data) => {
            console.log('data ', data)
        }).catch((error) => {
            console.log('error ', error)
        })
    }

    refOff() {
        this.ref.off();
    }
}

const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;


