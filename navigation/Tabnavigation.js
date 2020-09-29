import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Ionicons from 'react-native-vector-icons/Ionicons'

// import { MainStackNavigator, RecipeStackNavigator, TrainingStackNavigator, DiaryStackNavigator } from './StackNavigation'

import { MainStackNavigator, ProfileStackNavigator, MessageStackNavigator, ExploreStackNavigator } from './StackNavigation'
import { Platform, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { OpaqueColorValue } from 'react-native';
import DrawerNavigation from './DrawerNavigation'

const Tab = createBottomTabNavigator();



const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Profile') {
                        iconName = focused
                            ? 'account'
                            : 'account-outline';
                    } else if (route.name === 'Messages') {
                        iconName = focused ? 'message' : 'message-outline';
                    } else if (route.name === 'Explore') {
                        iconName = focused ? 'airplane-takeoff' : 'airplane-landing';
                    }
                    // else if (route.name === 'profile') {
                    //     iconName = focused ? 'book-open' : 'book-open-outline';
                    // }

                    // You can return any component that you like here!
                    return <MaterialCommunityIcons name={iconName} size={30} color={color}
                    />;
                    //return <Ionicons name={iconName} size={size} color={color} />
                },

            })}
            tabBarOptions={{
                labelStyle: {
                    fontSize: 16,
                },
                safeAreaInsets: {
                    bottom: Platform.OS === 'ios' ? 40 : 0
                },
                activeTintColor: 'blue',
                inactiveTintColor: 'grey',
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: null,
                    position: 'absolute',
                    // borderTopRightRadius: 20,
                    //borderTopLeftRadius: 20,
                    elevation: 0,

                },

            }}>
            {/* <Tab.Screen name="The Kit" component={MainStackNavigator} /> */}

            <Tab.Screen name="Profile" component={ProfileStackNavigator} />
            <Tab.Screen name="Messages" component={MessageStackNavigator} />
            <Tab.Screen name="Explore" component={ExploreStackNavigator} />
            {/* <Tab.Screen name="Recept" component={RecipeStackNavigator} />
            <Tab.Screen name="Träning" component={TrainingStackNavigator} />
            <Tab.Screen name="Dagbok" component={DiaryStackNavigator} /> */}
        </Tab.Navigator>
    );
}

export default BottomTabNavigator