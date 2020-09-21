import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import * as firebase from 'firebase'


export function authUser() {
    return new Promise(function (resolve, reject) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                resolve(user);
                console.log(user.email + 'logged in')
            } else {
                reject('User not logged in');
            }
        });
    });
}
export function getUser() {

    if (!firebase.apps.length) {
        firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
}
export function signOut() {
    firebase.auth().signOut().then(function () {
        console.log('User signed')
    }).catch(function (error) {
        console.log('error signing out' + error)
    })
}