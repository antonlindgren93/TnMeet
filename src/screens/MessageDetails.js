import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { Mess } from '../components/mess'
import MessageRoom from '../components/ChatRoom'
import { withNavigation } from 'react-navigation'



const MessageDetails = ({ result }) => {
    return (
        <View style={styles.container}>
            {/* <Image style={styles.image} source={{ uri: result.image_url }} /> */}
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.username},  {result.message}</Text>

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

export default MessageDetails


// import React, { useState } from 'react'
// import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
// import { ListItem, Avatar } from 'react-native-elements'
// import ApiKeys from '../../Apis/ApiKeys'
// import { Mess } from '../components/mess'
// import MessageDetails from './MessageDetails'
// import { withNavigation } from 'react-navigation'
// import { useNavigation } from '@react-navigation/native'
// import * as firebase from 'firebase'
// import 'firebase/firestore'
// import 'firebase/auth'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
// import { firestore } from 'firebase'
// import ChatRoom from '../components/ChatRoom'


// sendMessage = async (error) => {
//     error.preventDefault()
//     const { uid, photoURL } = firebase.auth().currentUser
//     await messageRef.add({
//         text: formValue,
//         createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//         uid,
//         photoURL

//     })
// }
// export default class Messages extends React.Component {
//     // const Messages = () => {
//     constructor(props) {
//         super(props)
//         const auth = firebase.auth()
//         const messageRef = firestore.CollectionReference('messages')
//         const query = messageRef.orderBy('createdAt').limit(25)
//         const [messages] = useCollectionData(query, { idField: 'id' })
//         const [formValue, setFormValue] = useState('')



//         if (!firebase.apps.length) {
//             firebase.initializeApp(ApiKeys.FirebaseConfig)
//         }

//         //const firestore = firebase.firestore()
//         const [user] = useAuthState(firebase.auth)
//     }

//     render() {

//         // const auth = firebase.auth()
//         // const messageRef = firestore.CollectionReference('messages')
//         // const query = messageRef.orderBy('createdAt').limit(25)
//         // const [messages] = useCollectionData(query, { idField: 'id' })
//         // const [formValue, setFormValue] = useState('')



//         // if (!firebase.apps.length) {
//         //     firebase.initializeApp(ApiKeys.FirebaseConfig)
//         // }

//         // //const firestore = firebase.firestore()
//         // const [user] = useAuthState(firebase.auth)
//         return (
//             <View>
//                 {messages && messages.map(msg => <ChatRoom key={msg.id} message={msg} />)}
//                 <TextInput value={formValue} onChange={(err) => setFormValue(err.target.value)}></TextInput>
//                 <TouchableOpacity onPress={this.sendMessage()}>

//                 </TouchableOpacity>

//             </View>
//         )
//     }
// }

// //export default Messages
