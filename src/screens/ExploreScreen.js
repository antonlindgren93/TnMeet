import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, Platform, Dimensions,Animated,PanResponder,Image } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import ProfileComponent from '../components/ProfileComponent'
import * as firebase from 'firebase'
import AuthenticateUser from '../../constants/authentication'
import Drawer from "../../navigation/DrawerNavigation"
import UserInfo from './UserInfo';
import { Extrapolate } from 'react-native-reanimated';
import SwipeComponent from '../components/SwipeComponent'





// export default class ExploreScreen extends React.Component {
//     _isMounted = false;


//     constructor(props) {
//         super(props);

//         this.state = {
//             loggedInUser: null,
//             isAuthenticated: false,
//             isAuthenticating: true
//         };
//     }
//     authUser() {
//         return new Promise(function (resolve, reject) {
//             firebase.auth().onAuthStateChanged(function (user) {
//                 if (user) {
//                     resolve(user);
//                     console.log(user.email + 'logged in')
//                 } else {
//                     reject('User not logged in');
//                 }
//             });
//         });
//     }

//     componentDidMount() {
//         _mounted = true
//         this.authUser().then((user) => {
//             //console.log('componentdidmount user is' + user)
//             //this.userHasAuthenticated(true);
//             this.setState({ isAuthenticating: false });
//         }, (error) => {
//             this.setState({ isAuthenticating: false });
//             alert(e);
//         });
//     }
//     componentWillUnmount() {
//         this._isMounted = false;
//     }

//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 {/* other code from before here */}
//                 <Text> Building of the match up Screen is Under Works.
//                     Thanks for your understanding
//                 </Text>
          
//             </View>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     editProfile: {
//         marginBottom: 10,
//         color: 'red',
//         backgroundColor: 'red'
//     }
// })



//import all the components we are going to use.

// TEST 2 V
// const SCREEN_HEIGHT = Dimensions.get('window').height
// const SCREEN_WIDTH = Dimensions.get('window').width

// const Users =[
//   {id: "1", uri: require('../../assets/test1.jpg')},
//   {id: "2", uri: require('../../assets/test2.jpg')},
//   {id: "3", uri: require('../../assets/test3.jpg')},
//   {id: "4", uri: require('../../assets/test4.jpg')},
//   {id: "5", uri: require('../../assets/test5.jpg')},
// ]

export default class ExploreScreen extends React.Component {


  // constructor() {
  //   super()
  //   this.position = new Animated.ValueXY()
  //   this.state = {
  //     currentIndex: 0
  //   }
  //   //Detta gör att kortet roterar när man har dragit kortet halva skärmbredden, 10grader
  //   this.rotate = this.position.x.interpolate({
  //     inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
  //     outputRange:['-10deg','0deg','10deg'],
  //     extrapolate: 'clamp'
  //   })

  //   this.rotateAndTranslate = {
  //     transform:[{
  //       rotate:this.rotate
        
  //     },
  //     ...this.position.getTranslateTransform()
  //   ]
  //   }

  //   this.likeOpacity = this.position.x.interpolate({
  //     inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
  //     outputRange:[0,0,1],
  //     extrapolate: 'clamp'
  //   })
  //   this.dislikeOpacity = this.position.x.interpolate({
  //     inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
  //     outputRange:[1,0,0],
  //     extrapolate: 'clamp'
  //   })

  //   this.nextCardOpacity = this.position.x.interpolate({
  //     inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
  //     outputRange:[1,0,1],
  //     extrapolate: 'clamp'
  //   })
  //   this.nextCardScale = this.position.x.interpolate({
  //     inputRange:[-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
  //     outputRange:[1,0.8,1],
  //     extrapolate: 'clamp'
  //   })

  // }

  // componentWillMount(){
  //   this.PanResponder = PanResponder.create({
     
  //     onStartShouldSetPanResponder:(evt, gestureState) => true,
  //     onPanResponderMove: (evt, gestureState) => {

  //       this.position.setValue({x:gestureState.dx, y: gestureState.dy})
  //     },
  //     onPanResponderRelease: (evt, gestureState) => {

  //       if(gestureState.dx > 120){
  //         Animated.spring(this.position,{
  //           toValue:{x:SCREEN_WIDTH + 100,y:gestureState.dy}
  //         }).start(() => {
  //           this.state({currentIndex: this.state.currentIndex + 1}, () => {
  //             this.position.setValue({x:0,y:0})
  //           })
  //         })
  //       }
  //       else if(gestureState.dx < -120){
  //         Animated.spring(this.position,{
  //           toValue:{x:SCREEN_WIDTH - 100,y:gestureState.dy}
  //         }).start(() => {
  //           this.setState({currentIndex:this.state.currentIndex + 1}, () => {
  //             this.position.setValue({x:0,y:0})
  //           })
  //         })
  //       }
  //       else {
  //         Animated.spring(this.position, {
  //           toValue: {x: 0, y:0},
  //           friction: 4
            
  //         }).start()
  //       }
  //     }
  //   })
  // }
  
  // renderUsers = ()  => {
  //   return Users.map((item,i) => {

  //     if( i < this.state.currentIndex) {
  //       return null
  //     } else if ( i == this.state.currentIndex) {

  //       return (
  //         <Animated.View
  //         {...this.PanResponder.panHandlers}
  //          key={item.id} style={[this.rotateAndTranslate, 
  //          {height:SCREEN_HEIGHT - 200, width: SCREEN_WIDTH, padding: 10, position: 'absolute'}]}>
  
  //         <Animated.View style={{opacity:this.likeOpacity, transform:[{rotate: '-30deg'}], position: 'absolute', top :50, left:40, zIndex: 1000}}>
  //           <Text 
  //           style={{ color:'green', fontSize:32, fontWeight:'800', padding: 10 }}>
  //             <FontAwesome5 name="plane-departure" size={40} color="green" />
  //             Like
  //             </Text>
  //         </Animated.View>

  //         <Animated.View style={{opacity:this.dislikeOpacity, 
  //           transform:[{rotate: '30deg'}], position: 'absolute', top :50, right:40, zIndex: 1000}}>
  //           <Text 
  //           style={{ color:'red', fontSize:32, fontWeight:'800', padding: 10 }}>
  //             <FontAwesome5 name="plane-arrival" size={40} color="red" />
  //             Dislike
  //             </Text>
  //         </Animated.View>

  //         <Image style={{flex: 1, height: null, width:null, resizeMode: 'cover', borderRadius: 20 }} 
  //         source={item.uri}/>
  //       </Animated.View>
          
  //       )
  //     } else {
        
  //       return (
  //         <Animated.View
  //          key={item.id} 
  //          style={[{opacity:this.nextCardOpacity, 
  //          transform: [{scale:this.nextCardScale}], 
  //          height:SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'}]}>
  
  //         <Image style={{flex: 1, height: null, width:null, resizeMode: 'cover', borderRadius: 20 }} 
  //         source={item.uri}/>
  //       </Animated.View>
          
  //       )

  //     }
  //   }).reverse()
  // }
  
  render() {
      return (
        // <View style={{flex:1}}>
        //   <View style={{height: 60}}>
 
        //   </View>
        //   <View style={{flex: 1}}> 
        //     {this.renderUsers()}

        //   </View>
        //   <View style={{height: 60}}>
 
        //   </View>
        // </View>
        <View>
          <SwipeComponent/>
        </View>
      )
    }



}



