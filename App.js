import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import SignIn from './src/screens/SignIn'


const navigator = createStackNavigator({

  SignIn: SignIn

}, {
  initialRouteName: 'SignIn',
  defaultNavigationOptions: {
    title: 'Sign In'
  }
})

export default createAppContainer(navigator)

