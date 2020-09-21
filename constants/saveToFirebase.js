import * as firebase from 'firebase'
import React, {Component} from 'react'

const UpdateProfile = (firstname, lastname) => new Promise((resolve, reject) => {


    var 
    const userId = firebase.auth().currentUser.uid;

    console.log(userId)

    var userProfile = {
        created: d,
        firstname: firstname,
        lastname: lastname,
        email: firebase.auth().currentUser.email

    };

    firebase.database().ref(`users/${userId}`).set(userProfile)
        .then(() => resolve(userProfile))
        .catch(error => reject(error));

});

export default UpdateProfile