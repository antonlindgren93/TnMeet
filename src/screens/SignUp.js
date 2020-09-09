import React, {Component} from 'react'
import { StyleSheet, Text, TextInput, View, Button, alert, Alert } from 'react-native'
import * as firebase from 'firebase'
import { withNavigation } from 'react-navigation'
import { StackNavigator } from 'react-navigation'
import ApiKeys from '../../Apis/ApiKeys'


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
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('ManageHobbies'))
            .catch(error => this.setState({ errorMessage: error.message }))
        console.log('handleSignUp')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Sign Up</Text>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    //secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <TextInput
                    //secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
                    value={this.state.passwordConfirm}
                />
                <Button title="Sign Up" onPress={this.handleSignUp} />
                <Button
                    title="Already have an account? Login"
                    onPress={() => this.props.navigation.navigate('SignIn')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
})


