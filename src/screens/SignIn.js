import React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, TextInput, TextInpu, Button } from 'react-native'
import ApiKeys from '../../Apis/ApiKeys'
import * as firebase from 'firebase'
import TestComponent from '../components/TestComponent'

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
            <View style={styles.container}>
                <Text>Login</Text>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <Button title="Login" onPress={this.handleLogin} />
                <Button
                    title="Don't have an account? Sign Up"
                    onPress={() => this.props.navigation.navigate('SignUp')}
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

