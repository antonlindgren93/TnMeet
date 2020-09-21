import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SignIn from './src/screens/SignIn'
import ApiKeys from './Apis/ApiKeys'
import React from 'react'
import { Text, View, StyleSheet, Platform, StatusBar, Button } from 'react-native'
import LoadingScreen from './src/screens/LoadingScreen'
import SignUp from './src/screens/SignUp'
import ManageHobbies from './src/screens/ManageHobbies'
import * as firebase from 'firebase'
import MainScreen from './src/screens/MainScreen'
import { getUser } from './constants/functions'
import { StackActions, NavigationActions } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset'



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
function skipLogin() {
  if (!firebase.apps.length) {
    firebase.initializeApp(ApiKeys.FirebaseConfig);
  }

  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'MainScreen' })],
  })
    .then(() => this.props.navigation.dispatch(resetAction))
}

// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     ;
//     console.log(user.email + 'logged in')

//   } else {

//   }
// });

class App extends React.Component {

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
      firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
    }
  }
  onAuthStateChanged = (user) => {
    this.setState({ isAuthenticationReady: true });
    this.setState({ isAuthenticated: !!user });
  }


  render() {

    if (!this.state.isLoadingComplete) {
      return (

        <View>
          <Text>Loading...</Text>
          <AppLoading
            onFinish={this._handleFinishLoading}
          />
          {/* <Button onFinish={this._handleFinishLoading} title={'Get Started'} /> */}

        </View>
      );

    } else {
      return (
        <View style={styles.container}>
          {(this.state.isAuthenticated) ? this.props.navigation.navigate('SignIn') : this.props.navigation.navigate('MainScreen')}
        </View>
      );
    }
  }
  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  }

}



const navigator = createStackNavigator({

  SignIn: SignIn,
  LoadingScreen: LoadingScreen,
  SignUp: SignUp,
  ManageHobbies: ManageHobbies,
  MainScreen: MainScreen,
  App: App,



}, {
  initialRouteName: 'App',
  defaultNavigationOptions: {

  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
})

export default createAppContainer(navigator)

