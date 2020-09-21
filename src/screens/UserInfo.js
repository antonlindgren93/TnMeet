import React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native'
import ApiKeys from '../../Apis/ApiKeys'
import * as firebase from 'firebase'
import TestComponent from '../components/TestComponent'
import {LinearGradient} from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { render } from 'react-dom'
import { set } from 'react-native-reanimated'
import { v4 as uuidv4 } from 'uuid'; 

export default class UserInfo extends React.Component {


    

    // const user = firebase.auth().currentUser;


    constructor(props){
        super(props);
        this.state = ({
            name: ''
        })
    }

    

    

    writeUserData(firstname,lastname,age,description){
        firebase.database().ref('users/').update({
            firstname,
            lastname,
            age,
            description
        }).then((data) =>{
            console.log('data',data)
        }).catch((error) => {
            console.log('error',error)
        })

    }
    

    componentWillMount() {

        var firebaseConfig = {
            apiKey: "AIzaSyBLa_ZYbonagomDv-0KmdoBI0N2Up0RJCY",
            authDomain: "tnmeet-8f6c5.firebaseapp.com",
            databaseURL: "https://tnmeet-8f6c5.firebaseio.com",
            projectId: "tnmeet-8f6c5",
            storageBucket: "tnmeet-8f6c5.appspot.com",
            messagingSenderId: "919756033010",
            appId: "1:919756033010:web:76c7c667bc833dd167396b",
            measurementId: "G-QKEWP68WMX"
          };

          if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }


     }
        

    render() {
        return (
            <LinearGradient colors={['#aac7cb','#84d8e6', '#0ddafa']}
            style={styles.linearGradient} 
            locations={[0, 0.5, 1]} 
            useAngle={true} angle={45} 
            angleCenter={{ x: 0.5, y: 0.5 }}>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

            <View style={styles.container}>
                
            <Image source={require('../../assets/tnmeetlogo.png')}/>
                <Text style={styles.header}>About you</Text>
                <TextInput
                    style={styles.textinput}
                    autoCapitalize="words"
                    placeholder="Enter first name"
                    placeholderTextColor="#fff"
                    onChangeText={(firstname) => this.setState({firstname})}
                    // onChange={this.handleChange}
                    //value={state.firstname} 
                />
                <TextInput
                    style={styles.textinput}
                    autoCapitalize="words"
                    placeholder="Enter last name"
                    placeholderTextColor="#fff"
                    onChangeText ={(lastname) => this.setState({lastname})}
                    
                    //value={this.state.lastname} 
                />
                <TextInput
                    style={styles.textinput}
                    autoCapitalize="words"
                    placeholder="Enter age"
                    placeholderTextColor="#fff"
                    onChangeText={(age) => this.setState({age})}
                    keyboardType="number-pad"
                    
                />
                <TextInput style={styles.textField}
                placeholder='Write something about youself...'
                placeholderTextColor='#000'
                multiline={true}
                onChangeText={(description) => this.setState({description})}
                
                />
                

                <TouchableOpacity style={styles.countinueBtn} 
                    onPress={() => this.writeUserData(
                        this.state.firstname,
                        this.state.lastname,
                        this.state.age,
                        this.state.description)}
                        > 
                 <Text style={styles.countinueBtn}>Done</Text>
                </TouchableOpacity>
                
            </View>
            </ScrollView>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({

    linearGradient: {
        flex:1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 60,
        paddingRight: 60,
    },
    header: {
        fontSize: 30,
        color: '#fff',
        paddingBottom:10,
        marginBottom:40,
        alignSelf:'center',
        paddingTop:30
    },
    textinput: {
        alignSelf: 'stretch',
        color:'#fff',
        height:40,
        marginBottom:30,
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1,

    },
    countinueBtn:{
        borderWidth: 2,
        height: 42,
        width: "100%",
        justifyContent: "center",
        textAlign:'center',
        borderRadius: 20,
        color:'#fff',
        borderColor:'#fff',
        textAlignVertical:'center',
        fontSize:18
    },
    scrollView: {
        
    },
    textField: {
        height:100,
        width:250,
        backgroundColor:'#fff',
        borderColor:'#FFFFFF',
        borderBottomWidth:1,
        borderTopColor:'#CCCCCC',
        marginBottom:30,
        borderWidth:1,
        borderRadius:10,
        textAlignVertical: 'top',
        
        
        
        
    }
    
})

