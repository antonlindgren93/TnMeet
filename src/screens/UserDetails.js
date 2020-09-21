import React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, TextInput, TextInpu, Button,Dimensions } from 'react-native'
import ApiKeys from '../../Apis/ApiKeys'
import * as firebase from 'firebase'

import {LinearGradient} from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { render } from 'react-dom'
import Tags from "react-native-tags";



export default class UserDetails extends React.Component {
    render() {
        return (
            <LinearGradient colors={['#aac7cb','#84d8e6', '#0ddafa']}
            style={styles.linearGradient} 
            locations={[0, 0.5, 1]} 
            useAngle={true} angle={45} 
            angleCenter={{ x: 0.5, y: 0.5 }}>

            <View style={styles.container}>
            <Image source={require('../../assets/tnmeetlogo.png')}/>
                <Text style={styles.header}>Hobbies/activites</Text>
                <TextInput
                    style={styles.textinput}
                    autoCapitalize="words"
                    placeholder="Tell people something about yourself"
                    placeholderTextColor="#fff" 
                    multiline= {true}
                    numberOfLines= {8}
                />
                
                    {/* <Tags
                        initialText="Snorkeling"
                        textInputProps={{
                        placeholder: "Any type of animal"
                        }}
                        initialTags={["Hiking ", "Surfing ", "Diving"]}
                        onChangeTags={tags => console.log(tags)}
                        onTagPress={(index, tagLabel, event) =>
                        console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                        }
                        containerStyle={{ justifyContent: "center" }}
                        inputStyle={{ backgroundColor: "white" }}
                        renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                        <TouchableOpacity key={`${tag}-${index}`} onPress={onPress}>
                            <Text>{tag}</Text>
                        </TouchableOpacity>
                        )}
                    /> */}
                    
                

                <TouchableOpacity style={styles.countinueBtn} onPress={() => this.props.navigation.navigate('MainScreen')}> 
                 <Text style={styles.countinueBtn}>Done </Text>
                </TouchableOpacity>
            </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({

    linearGradient: {
        flex:1
    },
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 60,
        paddingRight: 60,
    },
    header: {
        fontSize: 30,
        color: '#fff',
        paddingBottom:10,
        marginBottom:40,
        alignSelf:'center',
        paddingTop:30
    },
    textinput: {
        
        color:'#fff',
        height:100,
        marginBottom:30,
        borderColor:'#f8f8f8',
        borderBottomWidth:2,
        borderRightWidth:2,
        borderLeftWidth:2,
        borderTopWidth:2,
        paddingLeft:20,
        alignContent:'flex-start'

    },
    countinueBtn:{
        borderWidth: 2,
        height: 42,
        width: "100%",
        justifyContent: "center",
        textAlign:'center',
        borderRadius: 20,
        color:'#fff',
        borderColor:'#fff',
        textAlignVertical:'center',
        fontSize:18
    },
    tags: {
        backgroundColor: '#fff'
    }
    
})

