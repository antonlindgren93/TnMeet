import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, StackActions } from 'react-navigation'
import SignIn from './src/screens/SignIn'
import ApiKeys from './Apis/ApiKeys'

import LoadingScreen from './src/screens/LoadingScreen'
import SignUp from './src/screens/SignUp'
import ManageHobbies from './src/screens/ManageHobbies'
import * as firebase from 'firebase'


const navigator = createStackNavigator({

  SignIn: SignIn,
  LoadingScreen: LoadingScreen,
  SignUp: SignUp,
  ManageHobbies: ManageHobbies


}, {
  initialRouteName: 'SignIn',
  defaultNavigationOptions: {

  }
})

export default createAppContainer(navigator)

