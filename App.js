import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import ApiKeys from './Apis/ApiKeys'
import React from 'react'
import { Text, View, StyleSheet, Platform, StatusBar, Button, ActivityIndicator, Image } from 'react-native'
import * as firebase from 'firebase'
import { StackActions, NavigationActions } from 'react-navigation'
import RootNavigation from './navigation/RootNavigation'
import DrawerNavigation from './navigation/DrawerNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { SignInStackNavigator } from './navigation/StackNavigation'
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import SplashScreen from 'react-native-splash-screen'
import { useEffect, Fragment } from 'react'


export default class App extends React.Component {
  _isMounted = false
  constructor(props) {

    super(props);

    this.state = {
      loggedInUser: null,
      isAuthenticated: false,
      isAuthenticating: true,
      isLoadingComplete: false,
      isAuthenticationReady: false
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }

    firebase.auth().onAuthStateChanged(this.onAuthStateChanged)

  }
  onAuthStateChanged = (user) => {
    this.setState({ isAuthenticationReady: true });
    this.setState({ isAuthenticated: !!user });
    console.log(!!user)
  }

  componentDidMount = () => {
    this._isMounted = true
    this.setState({ isLoadingComplete: true })
    console.log(this.state.isAuthenticationReady)
  }
  componentWillUnmount = () => {
    this._isMounted = false
  }
  render() {
    // useEffect(() => {
    //   SplashScreen.hide()
    // }, [])

    if ((!this.state.isLoadingComplete && !this.state.isAuthenticationReady)) {
      return (
        <ActivityIndicator />
      )

    } else {
      return (

        <View style={styles.container}>
          {(this.state.isAuthenticated) ? <NavigationContainer>
            <DrawerNavigation />
          </NavigationContainer> : <RootNavigation />}
          {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}

          */}


        </View>
      );
    }
  }
  //}
  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  }
  async _cacheResourcesAsync() {
    const images = [require('./assets/snack.png')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})


