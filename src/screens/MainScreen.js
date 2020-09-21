import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import ProfileComponent from '../components/ProfileComponent'

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

class HomeScreen extends React.Component {
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
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* other code from before here */}
                <ProfileComponent />
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
            Home: HomeStack,
            Settings: SettingsStack,
            Profile: ProfileScreen
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