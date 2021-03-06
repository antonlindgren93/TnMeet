
import React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native'
import ApiKeys from '../../Apis/ApiKeys'
import * as firebase from 'firebase'

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import saveToFirebase from '../../constants/saveToFirebase'
import { getUser } from '../../constants/functions'
import * as ImagePicker from 'expo-image-picker'
import { StatusBar } from 'expo-status-bar';
import * as Permissions from 'expo-permissions'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateComponent from '../components/DateComponent'
import { StackActions, NavigationActions } from 'react-navigation'
import DrawerNavigator from '../../navigation/DrawerNavigation'
import { ProfileStackNavigator } from '../../navigation/StackNavigation';
import SignUpNavigation from '../../navigation/SignUpNavigationDrawer'
import ProfileComponent from '../components/ProfileComponent'
import SignUp from '../screens/SignUp'


const storage = firebase.storage()
const pathReference = storage.ref('images/test-image')


export default class UserInfo extends React.Component {



    constructor(props) {
        super(props);
        this.state = ({
            firstname: '',
            lastname: '',
            description: '',
            age: '',
            image: require('../../assets/profileImageTN2.png'),
            //Koppla namn från databasen 
            email: firebase.auth().currentUser.email
            
        })

        getUser()
    }

    // this.setState({user:{ ...this.state.user, image: resultFromLibrary.uri}})

    onTakePicturePress = async () => {

        let resultFromCamera = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3]
        });
        if (!resultFromCamera.cancelled) {
            this.uploadImage(resultFromCamera.uri, "Camera")

            this.setState({
                image: resultFromCamera
            })

                .then(() => {

                    Alert.alert("Uploaded from camera!")


                }).catch((error) => {
                })
        }
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

    //SET STATE IN THIS FUNCTION
    onChooseImagePress = async () => {

        
        let resultFromLibrary = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3]
        });
        if (!resultFromLibrary.cancelled) {
            this.uploadImage(resultFromLibrary.uri)
            this.setState({
                image: resultFromLibrary
            })

            console.log('this is image from librRY ' + resultFromLibrary)

                .then(() => {
                    Alert.alert("Success!")
                }).catch((error) => {
                    Alert.alert('Error:', error.message)
                })
        }
    }

    uploadImage = async (uri, imageName) => {
        getUser()
        const response = await fetch(uri)
        const blob = await response.blob()


        var ref = firebase.storage().ref().child("images/" + this.state.email)
        

        var ref = firebase.storage().ref().child("images/" + imageName)



        return ref.put(blob)
        console.log("image uploaded!")

    }



    downloadImage = () => {
        storageRef.child('images/' + imageName).getDownloadURL().then(function (url) {
            // `url` is the download URL for 'images/stars.jpg'
            console.log('This is the url for the image ' + url)

        }).catch(function (error) {
            // Handle any errors

        });
    }


    render() {
        return (


            <LinearGradient colors={['#aac7cb', '#84d8e6', '#0ddafa']}
                style={styles.linearGradient}
                locations={[0, 0.5, 1]}
                useAngle={true} angle={45}
                angleCenter={{ x: 0.5, y: 0.5 }}>


                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>


                    <View style={styles.container}>
                       
                        <Image source={this.state.image} style={styles.profilePlaceholder} />


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <TouchableOpacity style={styles.camera} onPress={this.onTakePicturePress}>
                                <Entypo name="camera" size={24} color="white" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.library} onPress={this.onChooseImagePress}>
                                <MaterialIcons name="photo-library" size={24} color="white" />
                            </TouchableOpacity>

                        </View>



                        <Text style={styles.header}>About you</Text>
                        <TextInput
                            style={styles.textinput}
                            autoCapitalize="words"
                            placeholder="Enter first name"
                            placeholderTextColor="#fff"
                            onChangeText={(firstname) => this.setState({ firstname })}
                        
                        />
                        <TextInput
                            style={styles.textinput}
                            autoCapitalize="words"
                            placeholder="Enter last name"
                            placeholderTextColor="#fff"
                            onChangeText={(lastname) => this.setState({ lastname })}

                        //value={this.state.lastname} 
                        />
                        <TextInput
                            style={styles.textinput}
                            autoCapitalize="words"
                            placeholder="Enter age"
                            placeholderTextColor="#fff"
                            onChangeText={(age) => this.setState({ age })}
                            keyboardType="number-pad"

                        />


                        <TextInput style={styles.textField}
                            placeholder='Write something about youself...'
                            placeholderTextColor='#000'
                            multiline={true}
                            onChangeText={(description) => this.setState({ description })}

                        />


                        <DateComponent />

                        <TouchableOpacity style={styles.countinueBtn}
                            onPress={() => this.UpdateToFirebase(
                                this.state.firstname,
                                this.state.lastname,
                                this.state.age,
                                this.state.description,
                                
                            )
                            }
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
        paddingBottom: 10,
        marginBottom: 40,
        alignSelf: 'center',
        paddingTop: 30
    },
    textinput: {
        alignSelf: 'stretch',
        color: '#fff',
        height: 40,
        marginBottom: 30,
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,

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
 
    camera: {
        paddingRight: '40%'
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

    iconPlaceholder: {
        width: 220,
        height: 175,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

