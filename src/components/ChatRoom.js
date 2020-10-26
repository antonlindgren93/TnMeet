import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'


const ChatRoom = ({ props }) => {
    const auth = firebase.auth()
    const { text, uid, photUrl } = props.message
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'
    return (
        <View className={`message ${messageClass}`}>
            <image source={photUrl} />
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },

    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5



    },
    name: {
        fontWeight: 'bold',
        fontSize: 14
    }
})

export default ChatRoom