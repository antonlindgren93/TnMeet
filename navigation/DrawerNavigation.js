import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProfileStackNavigator, } from "./StackNavigation";
import TabNavigator from "./Tabnavigation";
import * as firebase from 'firebase'
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "../src/screens/ProfileScreen";


import SignIn from '../src/screens/SignIn'

class LogOut extends React.Component {

    render() {
        firebase.auth().signOut()
        return (
            <SignIn />
        );
    }
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    console.log('drawerworking')
    return (



        <Drawer.Navigator
            edgeWidth={0}
            drawerContentOptions={{
                activeTintColor: "#05c46b",
                inactiveTintColor: 'grey',
                activeBackgroundColor: '',
                inactiveBackgroundColor: '#ffffff',
                labelStyle: {
                    fontSize: 18,
                },
            }}
            drawerPosition="Right"
        >
            <Drawer.Screen name="Start" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
            {/* <Drawer.Screen name="Om oss" component={AboutStackNavigator} />
            <Drawer.Screen name="Boka oss" component={BookUsStackNavigator} />
            <Drawer.Screen name="Podd" component={PoddStackNavigator} /> */}
            <Drawer.Screen name="Logga ut" component={LogOut} />
        </Drawer.Navigator >

    );
};

export default DrawerNavigator;