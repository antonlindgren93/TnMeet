import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, StackActions } from 'react-navigation'
import SignIn from './src/screens/SignIn'
import ApiKeys from './Apis/ApiKeys'

import LoadingScreen from './src/screens/LoadingScreen'
import SignUp from './src/screens/SignUp'
import ManageHobbies from './src/screens/ManageHobbies'
import * as firebase from 'firebase'
import MainScreen from './src/screens/MainScreen'
import UserInfo from './src/screens/UserInfo'
import UserDetails from './src/screens/UserDetails'




const navigator = createStackNavigator({

  SignIn: SignIn,
  LoadingScreen: LoadingScreen,
  SignUp: SignUp,
  ManageHobbies: ManageHobbies,
  MainScreen: MainScreen,
  UserInfo: UserInfo,
  UserDetails: UserDetails,
  
  


}, {
  initialRouteName: 'UserInfo',
  defaultNavigationOptions: {

  }
})

export default createAppContainer(navigator)

