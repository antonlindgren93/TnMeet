import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import ApiKeys from './Apis/ApiKeys'
import React from 'react'
import { Text, View, StyleSheet, Platform, StatusBar, Button, ActivityIndicator } from 'react-native'
import * as firebase from 'firebase'
import { StackActions, NavigationActions } from 'react-navigation'
import RootNavigation from './navigation/RootNavigation'
import DrawerNavigation from './navigation/DrawerNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { SignInStackNavigator } from './navigation/StackNavigation'


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


export default class App extends React.Component {

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
    console.log(user)
    this.setState({ isAuthenticationReady: true });
    this.setState({ isAuthenticated: !!user });
  }

  render() {

    // if ((!this.state.isLoadingComplete || !this.state.isAuthenticated)) {
    //   return (

    //     <View style={styles.container}>

    //       {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    //       {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />} */}

    //       <ActivityIndicator size="large" color="#0000ff" />
    //       {/* <RootNavigation /> */}
    //     </View>

    //   );
    // } else {
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

// }


// const navigator = createStackNavigator({

//   SignIn: SignIn,
//   LoadingScreen: LoadingScreen,
//   SignUp: SignUp,
//   ManageHobbies: ManageHobbies,
//   MainScreen: MainScreen,
//   Message: Message,
//   UserInfo: UserInfo,
//   UserDetails: UserDetails,
//   App: App,
//   DrawerScreen: DrawerScreen
// }, {
//   initialRouteName: 'App',
// })

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

// export default createAppContainer(navigator)
