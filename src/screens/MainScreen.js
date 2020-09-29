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

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details!</Text>

                <Text>texting how this works</Text>
            </View>
        );
    }
}
function authUser() {
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
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedInUser: null,
            isAuthenticated: false,
            isAuthenticating: true,
            res: null
        };
    }


    componentDidMount() {
        authUser().then((user) => {
            // this.userHasAuthenticated(true);
            this.setState({ isAuthenticating: false });
            console.log('componentdidmount user is' + user)
        }, (error) => {
            this.setState({ isAuthenticating: false });
            alert(error);
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* other code from before here */}
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('UserDetails')}
                />
            </View>
        );
    }
}
class ProfileScreen extends React.Component {

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
            //console.log('componentdidmount user is' + user)
            //this.userHasAuthenticated(true);
            this.setState({ isAuthenticating: false });
        }, (error) => {
            this.setState({ isAuthenticating: false });
            alert(e);
        });
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* other code from before here */}
                <ProfileComponent />
                <Drawer />
                {/* <Button
                    title="edit profile..."
                    onPress={() => this.props.navigation.navigate('Details')}
                /> */}
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('UserInfo')}
                    style={styles.editProfile}
                >
                    <Text>edit profile here...</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


class SettingsScreen extends React.Component {
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
            //this.userHasAuthenticated(true);
            this.setState({ isAuthenticating: false });
        }, (error) => {
            this.setState({ isAuthenticating: false });
            alert(e);
        });
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* other code from before here */}
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }

}

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailsScreen,
});
const ProfileStack = createStackNavigator({
    Settings: SettingsScreen,

})

export default createAppContainer(
    createBottomTabNavigator(
        {
            Profile: ProfileScreen,
            Settings: SettingsStack,
            Home: HomeStack

        },
        {
            /* Other configuration remains unchanged */
        }
    )
);



const styles = StyleSheet.create({
    editProfile: {
        marginBottom: 10,
        color: 'red',
        backgroundColor: 'red'
    }
})