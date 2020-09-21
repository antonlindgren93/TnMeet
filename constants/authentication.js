import * as firebase from 'firebase'
import { Text, View, StyleSheet } from 'react-native'
import React from 'react'


function authUser() {
    return new Promise(function (resolve, reject) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                resolve(user);
            } else {
                reject('User not logged in');
            }
        });
    });
}


class AuthenticateUser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedInUser: null,
            isAuthenticated: false,
            isAuthenticating: true
        };
    }

    componentDidMount() {
        authUser().then((user) => {
            this.userHasAuthenticated(true);
            this.setState({ isAuthenticating: false });
        }, (error) => {
            this.setState({ isAuthenticating: false });
            alert(e);
        });
    }
    // render() {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <Text>Details!</Text>

    //             <Text>texting how this works</Text>
    //         </View>
    //     );
    // }
}