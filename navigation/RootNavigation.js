
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from '../src/screens/SignIn';
import SignUp from '../src/screens/SignUp';
import MainScreen from '../src/screens/MainScreen'
import DrawerScreen from '../src/screens/DrawerScreen';
import UserInfo from '../src/screens/UserInfo';
import ProfileScreen from '../src/screens/ProfileScreen'
import TabNavigation from '../navigation/Tabnavigation'
import DrawerNavigation from '../navigation/DrawerNavigation'
import { ProfileStackNavigator } from './StackNavigation';
import SignUpNavigationDrawer from './SignUpNavigationDrawer'

// import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
// import HomeScreen from '../screens/Home';


const RootNavigation = createStackNavigator(
    {
        MainScreen: MainScreen,
        DrawerScreen: DrawerScreen,
        SignIn: SignIn,
        SignUp: SignUp,
        UserInfo: UserInfo,
        ProfileScreen: ProfileScreen,
        TabNavigation: TabNavigation,
        DrawerNavigation: DrawerNavigation,
        ProfileStackNavigator: ProfileStackNavigator,
        SignUpNavigationDrawer: SignUpNavigationDrawer
        // ForgotPassword: ForgotPasswordScreen,
    },
    {
        initialRouteName: "SignIn",
        defaultNavigationOptions: {
            headerShown: false
        }
    }
);


export default createAppContainer(RootNavigation)