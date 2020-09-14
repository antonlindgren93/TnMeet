import React from 'react'
import { View, Text, StyleSheet, Button, ScrollView, Image, TouchableOpacity, SafeAreaView }
    from 'react-native'
import * as firebase from 'firebase'
import ApiKeys from '../../Apis/ApiKeys'
import { Assets } from 'react-navigation-stack';
import { profilePic } from '../../assets/profile.jpg'
import { Divider, Icon } from 'react-native-elements'
import Layout from '../../constants/Layout'


var currentUse
if (!firebase.apps.length) {
    firebase.initializeApp(ApiKeys.FirebaseConfig);

}
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        currentUse = firebase.auth().currentUser
    } else {
        currentUse = 'Unknown user'
    }
})

const randomNo = (min, max) =>
    Math.floor(Math.random() * (max - min) + min)
const pics = [require('../../assets/profile.jpg'), require('../../assets/im.jpg')]
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

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* <ScrollView bounces={false} showsHorizontalScrollIndicator={false}> */}
                    <View style={styles.imageContainer}>
                        <Image source={pic} style={styles.image} />
                    </View>
                    <Text h4 style={styles.name}>
                        {currentUse.email}
                    </Text>
                    <Text style={styles.desc}>Fashion Designer at Amelia & Co.</Text>
                    <Divider style={styles.divider} />
                    <Text style={styles.desc}>
                        I love to travel. I have a cat named pickles. If he likes you, I
                        probably will too.
        </Text>
                    <Divider style={styles.divider} />
                    <Text style={styles.desc}>Find me on Social here</Text>
                    <View style={styles.socialLinks}>
                        <Social name="snapchat" />
                        <Social name="instagram" />
                        <Social name="facebook-square" />
                    </View>
                {/* </ScrollView> */}

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imageContainer: {
        margin: 20,
    },
    image: {
        width: Layout.window.width - 60, // device width - some margin
        height: Layout.window.height / 2 - 60, // device height / 2 - some margin
        borderRadius: 20,
        //width: 250,
        //height: 250,
        borderRadius: 20

    },
    name: {
        color: '#5E5E5E',
        alignSelf: 'flex-start',
        marginLeft: 30,
    },
    desc: {
        color: '#5E5E5E',
        alignSelf: 'flex-start',
        marginTop: 5,
        marginHorizontal: 30,
        fontSize: 14,
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
})