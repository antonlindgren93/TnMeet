import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProfileStackNavigator, } from "./StackNavigation";
import TabNavigator from "./Tabnavigation";
import * as firebase from 'firebase'
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "../src/screens/ProfileScreen";
import DrawerNavigation from "./DrawerNavigation"



const SignUpNavigationDrawer = () => {
    return (
        <NavigationContainer>
        <DrawerNavigation/>
        </NavigationContainer>
    )
}
export default SignUpNavigationDrawer