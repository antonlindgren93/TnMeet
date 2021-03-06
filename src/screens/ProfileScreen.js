import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import ProfileComponent from '../components/ProfileComponent'
import * as firebase from 'firebase'
import AuthenticateUser from '../../constants/authentication'
import Drawer from "../../navigation/DrawerNavigation"
//import authUser from '../../constants/authUser'
import DrawerNavigation from '../../navigation/DrawerNavigation'
import { NavigationContainer } from '@react-navigation/native';




export default class ProfileScreen extends React.Component {
    _isMounted = false;


    constructor(props) {
        super(props);

        this.state = {
            loggedInUser: null,
            isAuthenticated: false,
            isAuthenticating: true
        };
    }
    authUser() {
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

    componentDidMount() {
        this._isMounted = true
        this.authUser().then((user) => {
            //console.log('componentdidmount user is' + user)
            //this.userHasAuthenticated(true);
            this.setState({ isAuthenticating: false });
        }, (error) => {
            this.setState({ isAuthenticating: false });
            alert(e);
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             
                <ProfileComponent />
              
                {/* <DrawerNavigation /> */}

            </View>
        );
    }
}
const styles = StyleSheet.create({
    editProfile: {
        marginBottom: 10,
        color: 'red',
        backgroundColor: 'red'
    }
})

