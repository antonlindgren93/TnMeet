import React, { useState, useEffect } from "react";
import { TouchableOpacity, } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons'
import ProfileScreen from '../src/screens/ProfileScreen'
import Message from '../src/screens/Message'
import Explore from '../src/screens/ExploreScreen'
import SignIn from '../src/screens/SignIn'
import SignUp from '../src/screens/SignUp'
import MessageDetails from '../src/screens/MessageDetails'
import * as firebase from 'firebase'
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';


const Stack = createStackNavigator();

const screenOptionStyle = {

    headerStyle: {
        // backgroundColor: "#05c46b",
        backgroundColor: 'transparent'

    },
    headerTintColor: "black",

};

// Every stack in our TabBar is here below


// const MainStackNavigator = () => {

//     const [res, setRes] = useState([]);

//     var db = firebase.database().ref('users')
//     var auth = firebase.auth().currentUser.uid

//     useEffect(() => {
//         db.child('user').child(auth).on('value', (snapshot) => {
//             const res = snapshot.val()
//             setRes(res)

//         })
//     }, [])

//     return (
//         <Stack.Navigator screenOptions={screenOptionStyle}>
//             <Stack.Screen name="Home" component={Home} options={({ navigation, route }) => ({

//                 headerRight: () => (
//                     <TouchableOpacity onPress={navigation.openDrawer}>
//                         {/*Donute Button Image */}
//                         <MaterialCommunityIcons name="menu" size={32} color="white" style={{ marginRight: 10 }} />
//                     </TouchableOpacity>
//                 ),
//                 headerTitleStyle: {
//                     alignSelf: 'center',

//                 },
//                 title: 'Hej ' + res.first_name + '!',
//                 // title: 'hej',
//                 headerLeft: () => (
//                     <MaterialCommunityIcons name="chevron-left"
//                         style={{ marginLeft: 10, display: "none" }}
//                         size={32} color='white'
//                     />
//                 )
//             })} />
//             <Stack.Screen name="Profile" component={TryKit} options={{
//                 headerBackTitleVisible: false
//             }} />
//         </Stack.Navigator>
//     );

// };



const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Profile" component={ProfileScreen} options={({ navigation, route }) => ({

                headerRight: () => (
                    <TouchableOpacity onPress={navigation.openDrawer}>
                        {/*Donute Button Image */}
                        <MaterialCommunityIcons name="menu" size={32} color="black" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    alignSelf: 'center'
                },
                headerLeft: () => (
                    <MaterialCommunityIcons name="chevron-left"
                        style={{ marginLeft: 10, display: "none" }}
                        size={32} color='white'
                    />
                )
            })} />
        </Stack.Navigator>
    );
};

const MessageStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Messages" component={Message} options={({ navigation, route }) => ({

                headerRight: () => (
                    <TouchableOpacity onPress={navigation.openDrawer}>
                        {/*Donute Button Image */}
                        <MaterialCommunityIcons name="menu" size={32} color="white" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    alignSelf: 'center'
                },
                headerLeft: () => (
                    <MaterialCommunityIcons name="chevron-left"
                        style={{ marginLeft: 10, display: "none" }}
                        size={32} color='white'
                    />
                )
            })} />
            <Stack.Screen name="MessageDetails" component={MessageDetails} options={{
                // headerBackTitleVisible: false
            }} />
        </Stack.Navigator>
    );
};

const ExploreStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Explore" component={Explore} options={({ navigation, route }) => ({

                headerRight: () => (
                    <TouchableOpacity onPress={navigation.openDrawer}>
                     
                        <MaterialCommunityIcons name="menu" size={32} color="white" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    alignSelf: 'center'
                },
                headerLeft: () => (
                    <MaterialCommunityIcons name="chevron-left"
                        style={{ marginLeft: 10, display: "none" }}
                        size={32} color='white'
                    />
                )
            })} />
        </Stack.Navigator>
    );
};

// Every stack in our DrawerNav are below

const SignInStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Om oss" component={SignIn} options={({ navigation, route }) => ({

                headerRight: () => (
                    <TouchableOpacity onPress={navigation.openDrawer}>
                        <MaterialCommunityIcons name="menu" size={32} color="white" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    alignSelf: 'center'
                },
                headerLeft: () => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Home")
                    }} >
                        <MaterialCommunityIcons name="chevron-left"
                            style={{ marginLeft: 10 }}
                            size={32} color='white'
                        />
                    </TouchableOpacity>
                )
            })} />
            <Stack.Screen name="SignUp" component={SignUp} options={{
                headerBackTitleVisible: false
            }} />
        </Stack.Navigator>
    );
};

const MessageDetailsStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Boka oss" component={MessageDetails} options={{
                headerRight: () => (
                    <TouchableOpacity onPress={navigation.openDrawer}>
                        {/*Donute Button Image */}
                        <MaterialCommunityIcons name="menu" size={32} color="white" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    alignSelf: 'center'
                },
                headerLeft: () => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Home")
                    }} >
                        <MaterialCommunityIcons name="chevron-left"
                            style={{ marginLeft: 10 }}
                            size={32} color='white'
                        />
                    </TouchableOpacity>
                )
            }} />
        </Stack.Navigator>
    );
};



// const PoddStackNavigator = ({ navigation }) => {
//     return (
//         <Stack.Navigator screenOptions={screenOptionStyle}>
//             <Stack.Screen name="Podd" component={Podd} options={{
//                 headerRight: () => (
//                     <TouchableOpacity onPress={navigation.openDrawer}>
//                         {/*Donute Button Image */}
//                         <MaterialCommunityIcons name="menu" size={32} color="white" style={{ marginRight: 10 }} />
//                     </TouchableOpacity>
//                 ),
//                 headerTitleStyle: {
//                     alignSelf: 'center'
//                 },
//                 headerLeft: () => (
//                     <TouchableOpacity onPress={() => {
//                         navigation.navigate("Home")
//                     }} >
//                         <MaterialCommunityIcons name="chevron-left"
//                             style={{ marginLeft: 10 }}
//                             size={32} color='white'
//                         />
//                     </TouchableOpacity>
//                 )
//             }} />
//         </Stack.Navigator>
//     );
// };



export { ProfileStackNavigator, MessageStackNavigator, ExploreStackNavigator, SignInStackNavigator, MessageDetailsStackNavigator};
// export { MainStackNavigator, RecipeStackNavigator, TrainingStackNavigator, DiaryStackNavigator, AboutStackNavigator, BookUsStackNavigator, PoddStackNavigator, };