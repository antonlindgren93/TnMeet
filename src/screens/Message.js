// import React from 'react'
// import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
// import { ListItem, Avatar } from 'react-native-elements'
// import { Mess } from '../components/mess'
// import MessageDetails from '../../src/screens/MessageDetails'
// import { withNavigation } from 'react-navigation'
// import MessageRoom from '../components/MessageRoom'
// import { useNavigation } from '@react-navigation/native'
// import * as firebase from 'firebase'
// import 'firebase/firestore'
// import 'firebase/auth'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
// import { firestore } from 'firebase'



// class Messages extends React.Component {
//     constructor(props) {
//         super(props)
//         state:{
//             const navigation = useNavigation
//         }

//     }

//     keyExtractor = (item, index) => index.toString()

//     renderItem = ({ item }) => (
//         <ListItem
//             bottomDivider
//             // onPress={() => (props.navigation.navigate('MessageDetails'), { id: item.id })
//             // }
//         >
//             <Avatar title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }} />
//             <ListItem.Content>
//                 <ListItem.Title>{item.name}</ListItem.Title>
//                 <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
//                 <View style={styles.subtitleView}>
//                     <Image source={require('../../assets/blm.jpg')} style={styles.ratingImage} />
//                     <Text style={styles.ratingText}>5 months ago</Text>
//                 </View>
//                 <TouchableOpacity onPress={() => (this.state.navigation.navigate('MessageDetails'), { id: item.id })
//                 }>
//                     <MessageRoom result={item} />
//                 </TouchableOpacity>
//             </ListItem.Content>
//             <ListItem.Chevron />
//         </ListItem>
//     )

//     render() {

//         const list = [
//             {
//                 name: 'Amy Farha',
//                 avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//                 subtitle: 'Yo whats up? wanna meet?'
//             },
//             {
//                 name: 'Chris Jackson',
//                 avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//                 subtitle: 'Hey sorry lost interest when we met'
//             },

//         ]
//         return (
//             <FlatList
//                 keyExtractor={this.keyExtractor}
//                 data={list}
//                 renderItem={
//                     this.renderItem
//                 }
//             // renderItem={({ item }) => {
//             //     // return <Text>
//             //     //     {item.name}
//             //     // </Text>


//             //     return (
//             //         <TouchableOpacity onPress={() => (navigation.navigate('MessageRoom'), { id: item.id })
//             //         }>
//             //             <MessageRoom result={item} />
//             //         </TouchableOpacity>

//             //     )
//             // }}
//             />

//         )

//     }


// }
// const styles = StyleSheet.create({
//     subtitleView: {
//         flexDirection: 'row',
//         paddingLeft: 10,
//         paddingTop: 5
//     },
//     ratingImage: {
//         height: 19.21,
//         width: 10
//     },
//     ratingText: {
//         paddingLeft: 10,
//         color: 'grey'
//     }
// })

// const styles = StyleSheet.create({
//     title: {
//         fontSize: 24,
//         color: '#3F3F3F',
//     },
//     subtitle: {
//         color: '#A5A5A5',
//     },
//     image: {

//     }
// })

// firebase.initializeApp({

// })

// const auth = firebase.auth()
// //const firestore = firebase.firestore()
// function Messages() {
//     return (
//         <View>
//             <Text>

//             </Text>
//         </View>
//     )
// }

// function ChatRoom(){
//    const messageRef = firestore.collection('messages')
//    const query = messageRef.orderBy('createdAt').limit(25)
//    const [messages] = useCollectionData(query, {idField: 'id'})

//    return (
//        <View>
//           {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
//        </View>
//    )
// }
// function ChatMessage(props){

//     return (
//         <View>
//             <Text>hello messages</Text>
//         </View>
//     )
// }

// export default Messages