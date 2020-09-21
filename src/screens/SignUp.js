import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Button, alert, Alert, Image, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'
import { withNavigation } from 'react-navigation'
import { StackNavigator } from 'react-navigation'
import ApiKeys from '../../Apis/ApiKeys'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StackActions, NavigationActions } from 'react-navigation'

//import { Icon } from 'react-native-elements';


export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '', password: '', errorMessage: null,
            passwordConfirm: ""
        }
    }

    handleSignUp = () => {

        // if (this.state.password !== this.passwordConfirm){
        //     Alert.alert("Passwords do not match");
        //     return
        // }
        
        if (!firebase.apps.length) {
            firebase.initializeApp(ApiKeys.FirebaseConfig);
        }
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'MainScreen' })],
        })

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)

            //.then(() => this.props.navigation.navigate('UserInfo'))

            //.then(() => this.props.navigation.navigate('ManageHobbies'))
            .then(() => this.props.navigation.dispatch(resetAction))

            .catch(error => this.setState({ errorMessage: error.message }))
        console.log('handleSignUp')
    }
    
    render() {
        return (
            <LinearGradient colors={['#6233cf', '#4e91ec', '#8eddea']}
                style={styles.linearGradient}
                locations={[0, 0.5, 1]}
                useAngle={true} angle={45}
                angleCenter={{ x: 0.5, y: 0.5 }}>

                <View style={styles.container} >
                    <Image source={require('../../assets/tnmeetlogo.png')} />
                    <Text style={styles.header}>TnMeet</Text>
                    {this.state.errorMessage &&
                        <Text style={{ color: 'red' }}>
                            {this.state.errorMessage}
                        </Text>}
                    <View style={styles.username}>
                        <FontAwesome style={styles.mail} name="user-o" size={24} color="black" />
                        <TextInput style={styles.textinput}
                            placeholder="Username"
                            autoCapitalize="words"
                            placeholderTextColor="#fff"
                            underlineColorAndroid={'transparent'}

                        />
                    </View>
                    <View style={styles.username}>
                        <Feather style={styles.mail} name="mail" size={24} color="black" />
                        <TextInput style={styles.textinput}
                            placeholder="Email"
                            autoCapitalize="none"
                            placeholderTextColor="#fff"
                            underlineColorAndroid={'transparent'}
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        />
                    </View>
                    <View style={styles.username}>
                        <Feather style={styles.lock} name="lock" size={24} color="black" />
                        <TextInput style={styles.textinput}
                            //secureTextEntry
                            placeholder="Password"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            placeholderTextColor="#fff"
                            onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
                            value={this.state.passwordConfirm}
                        />
                    </View>


                <TouchableOpacity style={styles.signUpBtn}
                 onPress={this.handleSignUp}> 
                 <Text style={styles.signUpBtn}>Sign up! </Text>
                </TouchableOpacity>
           <TouchableOpacity style={styles.signUpBtn}
                        onPress={this.handleSignUp}>
                        <Text style={styles.signUpBtn}>Sign up! <AntDesign name="arrowright" size={24} color="white" /></Text>
                    </TouchableOpacity>


                    <Text style={styles.lineStyle}>───────────── OR ─────────────</Text>

                    <TouchableOpacity style={styles.signUpBtn}>
                        <Text style={styles.signUpBtn}>
                            <FontAwesome5 style={styles.facebook} name="facebook-f" size={24} color="black" />
                     Sign up with Facebook</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signInBtn}
                        onPress={() => this.props.navigation.navigate('SignIn')}>
                        <Text style={styles.signInBtn}>Have an account? Log in</Text>

                    </TouchableOpacity>


                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
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
        paddingBottom: 10,
        marginBottom: 40,
        alignSelf: 'center'
    },
    textinput: {
        alignSelf: 'stretch',
        color: '#fff',
        height: 40,
        marginBottom: 30,
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    signUpBtn: {
        borderWidth: 2,
        height: 42,
        width: "100%",
        justifyContent: "center",
        textAlign: 'center',
        borderRadius: 20,
        color: '#fff',
        borderColor: '#fff',
        textAlignVertical: 'center',
        fontSize: 18
    },
    signInBtn: {
        color: '#fff',
        marginTop: 20,
        marginBottom: 20


    },
    lineStyle: {
        color: "#fff",
        marginBottom: 20,
        width: "120%",
        marginTop: 10

    },
    username: {
        alignContent: 'center',
        width: "100%",


    },
    mail: {
        color: '#fff',
        marginTop: 12,
        margin: -35
    },
    user: {
        color: '#fff',
        marginTop: 12,
        margin: -35
    },
    lock: {
        color: '#fff',
        marginTop: 12,
        margin: -35
    },
    facebook: {
        color: '#fff',

    }

})


