import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated, PanResponder, TouchableOpacity } from 'react-native';
import { Card, Tile } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import ProfileComponent from '../components/ProfileComponent'
import { getUser } from '../../constants/functions'
import * as firebase from 'firebase'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width

var ref = firebase.storage().ref().child("images/kalle")

const Users =[
    {id: "1", name:"Ericka", uri: require('../../assets/test1.jpg')},
    {id: "2", name:"John", uri: require('../../assets/test2.jpg')},
    {id: "3", name:'Anton',uri: require('../../assets/test3.jpg')},
    {id: "4", name:'Ana',uri: require('../../assets/test4.jpg')},
    {id: "5", name:'Isabella',uri: require('../../assets/test5.jpg')},
  ]

  


export default class SwipeComponent extends React.Component {

    

    constructor(){
        super()

        this.position = new Animated.ValueXY()
        this.state={
            currentIndex: 0,
            
        }

        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
            outputRange: ['-10deg','0deg','10deg'],
            extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
            transform:[{
                rotate: this.rotate
            },
        ...this.position.getTranslateTransform()
        ]
        }
        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
            outputRange: [0,0,1],
            extrapolate: 'clamp'
        })
        this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
            outputRange: [1,0,0],
            extrapolate: 'clamp'
        })
        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
            outputRange: [1,0,1],
            extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2,0,SCREEN_WIDTH/2],
            outputRange: [1,0.8,1],
            extrapolate: 'clamp'
        })
        

        
    }
    nextUser() {
        
        
        console.log('nextuser func')
        

  }

    componentWillMount() {
        this.PanResponder = PanResponder.create({

            onStartShouldSetPanResponder:(evt,gestureState) => true,
            onPanResponderMove:(evt,gestureState) => {
                this.position.setValue({ x: gestureState.dx, y: gestureState.dy})
                console.log('Här 1')

            },
            onPanResponderRelease:(evt,gestureState) => {
                if (gestureState.dx>120) {
                    Animated.spring(this.position,{
                        toValue:{x:SCREEN_WIDTH + 100, y:gestureState.dy}
                    }).start(() => {
                        this.setState({currentIndex:this.state.currentIndex + 1}, ()=>{
                            this.position.setValue({x: 0, y: 0 })
                            console.log('Här 2')
                        })
                    })
                } else if (gestureState.dx < -120){
                        Animated.spring(this.position,{
                            toValue:{x: -SCREEN_WIDTH - 100, y:gestureState.dy}
                        }).start(() => {
                            this.setState({currentIndex:this.state.currentIndex + 1}, ()=>{
                                this.position.setValue({x: 0, y: 0 })
                                console.log('Här 3')
                            })
                        })  
                } else {
                    Animated.spring(this.position, {
                        toValue:{x:0, y:0},
                        friction: 4
                        
                    }).start()
                }
            }
        })
    }
    
    renderUsers = () => {
        
        return Users.map((item,i) => {

            if ( i < this.state.currentIndex ) {
                return null 
            } else if (this.state.currentIndex === 3 ) {
                alert('Its a match!!')
                return( 
                
                    <Animated.View 
                    {...this.PanResponder.panHandlers}
                    key={item.id} 
                    style={[this.rotateAndTranslate,
                    {height:SCREEN_HEIGHT - 220, width: SCREEN_WIDTH, padding: 10, position: 'absolute'}]}>
                        <Animated.View style= {{opacity:this.likeOpacity ,transform:[{rotate: '-30deg'}], position: 'absolute', top: 50, left: 40, zIndex: 1000}}>
                            <Text style={{ 
                                borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight:'800', padding: 10}}>
                                    <FontAwesome5 name="plane-departure" size={40} color="green" /> 
                                LIKE </Text> 
                                
                                   
                        </Animated.View>
       
                        <Animated.View style= {{opacity: this.dislikeOpacity, transform:[{rotate: '30deg'}], position: 'absolute', top: 50, right: 40, zIndex: 1000}}>
                            <Text style={{ 
                                borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight:'800', padding: 10}}> 
                                 <FontAwesome5 name="plane-arrival" size={40} color="red" />
                                NOPE </Text>
                                
                        </Animated.View>
    
                        
                            <Image 
                            style = {{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20}}
                            source={item.uri} 
                            
                            />
    
                            <Text style={{ 
                               fontSize: 20, fontWeight:'800', padding: 10}}
                                source={Users.name}
                                > 
                                
                            </Text>   
                      
                        </Animated.View>
    
                        
            )
                
            } else if (i == this.state.currentIndex) {
            return( 
                
                <Animated.View 
                {...this.PanResponder.panHandlers}
                key={item.id} 
                style={[this.rotateAndTranslate,
                {height:SCREEN_HEIGHT - 220, width: SCREEN_WIDTH, padding: 10, position: 'absolute'}]}>
                    <Animated.View style= {{opacity:this.likeOpacity ,transform:[{rotate: '-30deg'}], position: 'absolute', top: 50, left: 40, zIndex: 1000}}>
                        <Text style={{ 
                            borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight:'800', padding: 10}}>
                                <FontAwesome5 name="plane-departure" size={40} color="green" /> 
                            LIKE </Text> 
                            
                               
                    </Animated.View>
   
                    <Animated.View style= {{opacity: this.dislikeOpacity, transform:[{rotate: '30deg'}], position: 'absolute', top: 50, right: 40, zIndex: 1000}}>
                        <Text style={{ 
                            borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight:'800', padding: 10}}> 
                             <FontAwesome5 name="plane-arrival" size={40} color="red" />
                            NOPE </Text>
                            
                    </Animated.View>

                    
                        <Image 
                        style = {{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20}}
                        source={item.uri} 
                        
                        />

                        <Text style={{ 
                           fontSize: 20, fontWeight:'800', padding: 10}}
                            source={Users.name}
                            > 
                            
                        </Text>   
                  
                    </Animated.View>

                    
        )
            
        }
         
            else {
                return( 
                    <Animated.View 
                    key={item.id} 
                    style={[{opacity:this.nextCardOpacity, transform:[{scale:this.nextCardScale}],height:SCREEN_HEIGHT - 220, width: SCREEN_WIDTH, padding: 10, position: 'absolute'}]}>
                            <Image 
                            style = {{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20}}
                            source={item.uri}
                            />
                    
                        </Animated.View>
                )
            }
            
        }).reverse()
    }
    
    
    render() {
        return (

            <View>
                
            <View style ={{ flex:1 }}>
                <View style={{ height : 60}}> 

                </View>
                
                <View style={{ flex: 1 }}>
                    {this.renderUsers()}
                    
                </View>
                
                <View style={{ height: 60}}>

                </View>
                
            </View>

            <View style= {{flexDirection:'row', marginTop:'140%', justifyContent:"space-evenly"}}>

                {/* one undo button if we like */}
            {/* <TouchableOpacity style="undoBtn"
                            
                            onPress={() => this.setState({ currentIndex: this.state.currentIndex - 1 })}>
                                   
                                   <FontAwesome name="undo" size={24} color="orange" />
                            </TouchableOpacity> */}
                                           
                            <TouchableOpacity
                            
                            onPress={() => this.setState({ currentIndex: this.state.currentIndex + 1 })}>
                                   
                                <Feather name="x-circle" size={78} color="red" />
                            </TouchableOpacity>

                            <TouchableOpacity
                                
                                onPress={() => this.setState({ currentIndex: this.state.currentIndex + 1 })}>
                                <MaterialCommunityIcons name="heart-circle-outline" size={80} color="green" />
                            </TouchableOpacity>

                            
                            </View>
         </View>
             
        );

}
}

const styles = {

   undoBtn: {
       
   }

};

