import React, { useEffect } from 'react'
import { Flatlist, View, Text, StyleSheet, Button, ScrollView, Image, TouchableOpacity, SafeAreaView }
    from 'react-native'
import * as firebase from 'firebase'
import ApiKeys from '../../Apis/ApiKeys'
import { Assets } from 'react-navigation-stack';
import { profilePic } from '../../assets/profile.jpg'
import { Divider, Icon } from 'react-native-elements'
import Layout from '../../constants/Layout'
import { AppLoading } from 'expo';
import { getUser, signOut } from '../../constants/functions'
import { StackActions, NavigationActions } from 'react-navigation'
import { SocialIcon } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { ScreenStackHeaderRightView } from 'react-native-screens';




var currentUse
var userEmail
var firstname
var lastname





if (!firebase.apps.length) {
    firebase.initializeApp(ApiKeys.FirebaseConfig);
}
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        currentUse = firebase.auth().currentUser
        userEmail = currentUse.email
        firstname = currentUse.firstname
        lastname = currentUse.lastname

    } else {
        currentUse = 'Unknown user'
    }
})

if (firebase.auth().currentUser !== null) {
    console.log("user id: " + firebase.auth().currentUser.uid)
    id = firebase.auth().currentUser.uid
}


const UpdateProfile = (firstname, lastname) => new Promise((resolve, reject) => {

    const userId = firebase.auth().currentUser.uid;

    console.log(userId)

    var userProfile = {
        created: d,
        firstname: firstname,
        lastname: lastname,
        email: firebase.auth().currentUser.email

    };

    downloadImage(url)
    firebase.database().ref(`users/${userId}`).set(userProfile)
        .then(() => resolve(userProfile))
        .catch(error => reject(error));
});

const randomNo = (min, max) =>
    Math.floor(Math.random() * (max - min) + min)
 const pics = [require('../../assets/ana.jpg'), require('../../assets/ana.jpg')]
const Social = ({ name }) => (
    <Icon
        name={name}
        type="font-awesome"
        containerStyle={styles.iconContainer}
        size={32}
    />
)
 const pic = pics[randomNo(1, pics.length)]





export default class ProfilePage extends React.Component {
    _isMounted = false;



    


    constructor(props) {
        super(props)
        this.state = {
            res: [],
            image: ''
            
        }
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

    signOut = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
        })
        firebase.auth().signOut()
            .then(() => this.props.navigation.dispatch(resetAction))
            .catch(function (error) {
                console.log('error signing out' + error)
            })
    }

    render() {

        getUser()
        return (
            
            
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

                    <View style={styles.imageContainer}>
                        <Image source={pic} style={styles.image} />
                        <Image source={this.state.image}/>
                    </View>
                    <Text h4 style={styles.name}>
                    {this.state.res.firstname + ' '}
                         {this.state.res.lastname}
                    
                    </Text>
                    {/* <Text style={styles.email}>
                    {userEmail}
                    </Text> */}
                    <Text style={styles.desc}>Fashion Designer at Amelia & Co. </Text>
                    <Divider style={styles.divider} />
                    <Text style={styles.desc}>
                        {this.state.res.description}
                        
                    </Text>
                    <Divider style={styles.divider} />

                    <Text style={styles.desc}>Find me on Social here</Text>
                    <View style={styles.socialLinks}>

                    <View style={{marginBottom:200, flexDirection:'row', marginTop:30}}>
                        <SocialIcon
                            type='twitter'
                        />

                        <SocialIcon
                            raised={false}
                            type='facebook'
                        />

                        <SocialIcon
                            iconSize={56.5}
                            type='snapchat'
                            iconColor='yellow'
                        />

                        <SocialIcon
                            style={styles.instagramLogo}
                            type='instagram'
                        />
                        </View>


                    </View>

                    {/* </ScrollView> */}
                    {/* <Button title="testing database" onPress={() => UpdateProfile('john', 'doe')} /> */}
                    </ScrollView>
                </SafeAreaView>
                
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    instagramLogo: {

        backgroundColor: ('#CA1D7E', '#E35157', '#F2703F'),


    },
    signOut: {
        paddingBottom: 200
    },
    imageContainer: {
        margin: 20,
    },
    image: {
        borderRadius:20,
        width: Layout.window.width - 60, // device width - some margin
        height: Layout.window.height / 2 - 60, // device height / 2 - some margin
        //borderRadius: 20,
        //width: 250,
        //height: 250,
        //borderRadius: 20

    },
    name: {
        color: '#5E5E5E',
        alignSelf: 'flex-start',
        marginLeft: 30,
        fontSize:20
    },
    email:{
        fontSize:10,
        alignSelf: 'flex-start'

        
    },
    desc: {
        color: '#5E5E5E',
        alignSelf: 'flex-start',
        marginTop: 5,
        marginHorizontal: 30,
        fontSize: 18,
    },
    divider: {
        backgroundColor: '#C0C0C0',
        width: Layout.window.width - 60,
        //width: 10,
        margin: 20,
    },
    socialLinks: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: Layout.window.width,
        // width: 200,
        marginLeft: 40,
    },
    iconContainer: {
        paddingHorizontal: 8,
        paddingVertical: 15,
    },
    scrollView: {

    }
})