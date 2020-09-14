import React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, TextInput, TextInpu, Button } from 'react-native'
import ApiKeys from '../../Apis/ApiKeys'
import * as firebase from 'firebase'
import TestComponent from '../components/TestComponent'
import {LinearGradient} from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

export default class SignIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '', password: '', errorMessage: null
        }
    }

        handleLogin = () => {
            if (!firebase.apps.length) {
                firebase.initializeApp(ApiKeys.FirebaseConfig);
            }
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => this.props.navigation.navigate('ManageHobbies'))
                .catch(error => this.setState({ errorMessage: error.message }))
        }
    render() {
        return (

            <LinearGradient colors={['#aac7cb','#84d8e6', '#0ddafa']}
            style={styles.linearGradient} 
            locations={[0, 0.5, 1]} 
            useAngle={true} angle={45} 
            angleCenter={{ x: 0.5, y: 0.5 }}> 
            <View style={styles.container}>
                <Image source={require('../../assets/tnmeetlogo.png')}/>
                <Text style={styles.header}>TnMeet</Text>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                    <View style={styles.username}>
                    <FontAwesome style={styles.user} name="user-o" size={24} color="black" />
                <TextInput
                    style={styles.textinput}
                    autoCapitalize="none"
                    placeholder="Email"
                    placeholderTextColor="#fff"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                </View>
                <View style={styles.username}>
                <Feather style={styles.lock} name="lock" size={24} color="black" />
                <TextInput
                    secureTextEntry
                    style={styles.textinput}
                    autoCapitalize="none"
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                </View>

                <TouchableOpacity style={styles.logInBtn} onPress={this.handleLogin}>
                    <Text style={styles.logInBtn}>Log in <AntDesign name="arrowright" size={24} color="white" /> </Text>
                </TouchableOpacity>
                
                
                <Text style={styles.lineStyle}>───────────── OR ─────────────</Text>


                <TouchableOpacity style={styles.logInBtn}>
                    <Text style={styles.logInBtn}>
                        <FontAwesome5 style={styles.facebook} name="facebook-f" size={24} color="black" /> 
                        Log in with Facebook </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUpBtn} onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.signUpBtn}>Don't have an account? Sign up</Text>
                </TouchableOpacity>
            </View>
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
        fontSize: 36,
        color: '#fff',
        paddingBottom:10,
        marginBottom:40,
        alignSelf:'center',
        
    },
    textinput: {
        alignSelf: 'stretch',
        color:'#fff',
        height:40,
        marginBottom:30,
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1,
    },
    lineStyle:{
        color:"#fff",
        marginBottom:20,
        width:"120%",
        marginTop:10
        
   },
   logInBtn: {
    borderWidth: 2,
    height: 42,
    width: "100%",
    justifyContent: "center",
    textAlign:'center',
    borderRadius: 20,
    color:'#fff',
    borderColor:'#fff',
    textAlignVertical:'center',
    fontSize:18,
    
},
    signUpBtn: {
    color:'#fff',
    marginTop: 20,
    marginBottom:20, 
},
user:{
    color:'#fff',
    marginTop:10,
    margin:-35
},
username: {
    alignContent:'center',
    width:"100%",
    
},
facebook:{
    color:'#fff',
    
},
lock:{
    color:'#fff',
    marginTop:10,
    margin:-35
}
    
})

