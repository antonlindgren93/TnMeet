import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native'
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase'
import ApiKeys from '../../Apis/ApiKeys'

export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoadingComplete: false,
            isAuthenticationReady: false,
            isAuthenticated: false,
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(ApiKeys.FirebaseConfig);
        }
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    }

    onAuthStateChanged = (user) => {
        this.setState({ isAuthenticationReady: true });
        this.setState({ isAuthenticated: !!user });
    }



    render() {
 
        const handleLoading = () => {
            {(this.state.isAuthenticated) ? this.props.navigation.navigate('ManageHobbies') : this.props.navigation.navigate('SignIn')

        }}
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
                {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />} */}

                <Button title="Get Started" onPress={handleLoading}/>
            </View>
        );
        // }
    }

    // _loadResourcesAsync = async () => {
    //     return Promise.all([
    //         Asset.loadAsync([
    //             require('./assets/images/robot-dev.png'),
    //             require('./assets/images/robot-prod.png'),
    //         ]),
    //         Font.loadAsync({
    //             // This is the font that we are using for our tab bar
    //             ...Ionicons.font,
    //             // We include SpaceMono because we use it in HomeScreen.js. Feel free
    //             // to remove this if you are not using it in your app
    //             'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    //         }),
    //     ]);
    // };

    _handleLoadingError = error => {
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
});