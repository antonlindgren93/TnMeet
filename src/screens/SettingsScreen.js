import React, { useCallback, useState } from 'react'
import { Text, SectionList, StyleSheet, View, Image, ScrollView, TouchableOpacity, TextInput, Button, Alert, CameraRoll, FlatList, TouchableHighlight } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { getUser } from '../../constants/functions'
import * as ImagePicker from 'expo-image-picker'
import { StackActions, NavigationActions } from 'react-navigation'
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-community/picker'
import * as firebase from 'firebase'
import ApiKeys from '../../Apis/ApiKeys'
import { useCameraRoll } from '../components/useCameraRoll'
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import GiftedFormComponent from '../components/GiftedFormComponent'

class SettingsScreen extends React.Component {



    constructor(props) {
        super(props);
        this.state = ({
            firstname: '',
            lastname: '',
            description: '',
            age: '',
            image: require('../../assets/profileImageTN2.png'),
            value: 0,
            gender: 'other',
            res: [],
            photos: [require('../../assets/profileImageTN.png'), require('../../assets/profileImageTN.png'), require('../../assets/profileImageTN.png'), require('../../assets/profileImageTN.png')]


        })

        getUser()
    }

    componentDidMount() {

        _mounted = true
        firebase.auth().onAuthStateChanged((user) => {
            _mounted
            if (user != null) {
                const userId = firebase.auth().currentUser.uid
                firebase.database().ref('/users/' + userId).on('value', (snapshot) => {
                    const res = snapshot.val()

                    this.setState({ res })
                    console.log(this.state.res.lastname)
                })
            }
        })


    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    UpdateToFirebase = (firstname, lastname, age, description) => new Promise((resolve, reject) => {
        const userId = firebase.auth().currentUser.uid;
        console.log(userId)
        var userProfile = {
            firstname: firstname,
            lastname: lastname,
            description: description,
            age: age,
            email: firebase.auth().currentUser.email

        };
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'SignUpNavigationDrawer' })],
        })
        firebase.database().ref(`users/${userId}`).set(userProfile)
            .then(() => resolve(userProfile))
            .then(() => this.props.navigation.dispatch(resetAction))
            //.then(() => navigation.navigate("Explore"))
            .catch(error => reject(error));
    });

    render() {
        console.log(GiftedFormComponent)
        return (

            <LinearGradient colors={['#aac7cb', '#84d8e6', '#0ddafa']}
                style={styles.linearGradient}
                locations={[0, 0.5, 1]}
                useAngle={true} angle={45}
                angleCenter={{ x: 0.5, y: 0.5 }}>


                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}>


                    <View style={styles.container}>

                        <View style={styles.giftedForm}>
                            <GiftedFormComponent />
                        </View>
                        <View style={styles.textinput}>
                            <Slider
                                style={{ width: 200, height: 40 }}
                                step={1}
                                minimumValue={16}
                                maximumValue={100}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#000000"
                                onValueChange={value => this.setState({ value: value })}
                            />
                            <Text style={styles.textinput}>Age: {this.state.value}</Text>
                        </View>
                        <View>
                            <Picker
                                selectedValue={this.state.gender}
                                style={{ height: 50, width: 100 }}

                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ gender: itemValue })

                                }>
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                                <Picker.Item label="Other" value="Other" />
                            </Picker>

                        </View>






                        {/* <TouchableOpacity style={styles.countinueBtn}
                            onPress={() => this.UpdateToFirebase(
                                this.state.firstname,
                                this.state.lastname,
                                this.state.age,
                                this.state.description
                            )
                            }
                        >
                            <Text style={styles.countinueBtn}>Done</Text>
                        </TouchableOpacity> */}

                    </View>



                </ScrollView>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    sliderView: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },

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
        fontSize: 30,
        color: '#fff',
        marginBottom: 40,
        alignSelf: 'center',
        paddingTop: 30
    },
    textinput: {
        alignSelf: 'stretch',
        color: '#fff',
        height: 20,
        marginBottom: 15,

    },
    countinueBtn: {
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
    scrollView: {

    },
    textField: {
        height: 100,
        width: 250,
        backgroundColor: '#fff',
        borderColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderTopColor: '#CCCCCC',
        marginBottom: 30,
        borderWidth: 1,
        borderRadius: 10,
        textAlignVertical: 'top',
    },

    profilePlaceholder: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#E1E2E6',
        marginTop: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
    FlatlistStyles: {
        flexWrap: 'wrap'
    },
    giftedForm: {
        marginTop: 100
    }

})

export default SettingsScreen