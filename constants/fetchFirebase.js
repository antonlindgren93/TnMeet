import * as firebase from 'firebase'
import React, { Component } from 'react'
import { StackActions, NavigationActions } from 'react-navigation'

const fetchInfo = () => new Promise((resolve, reject) => {


    if (!firebase.apps.length) {
        firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
    const userId = firebase.auth().currentUser.uid;

    console.log(userId)

    var userProfile = {
        firstname: firstname,
        lastname: lastname,
        description: description,
        age: age,
        email: firebase.auth().currentUser.email

    };
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'UserInfo' })],
    })


    // firebase.database().ref(`users/${userId}`).set(userProfile)
    //     .then(() => resolve(userProfile))
    //     .then(() => this.props.navigation.dispatch(resetAction))
    //     .catch(error => reject(error));

    firebaseApp.database().ref('/users/' + userId).on('value', (snapshot) => {
        const userObj = snapshot.val();
        this.firstname = userObj.name;
        this.lastname = userObj.lastname;
        this.description = userObj.description
    })


});

export default fetchInfo