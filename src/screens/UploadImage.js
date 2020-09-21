import React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native'
import ApiKeys from '../../Apis/ApiKeys'
import * as firebase from 'firebase'
import TestComponent from '../components/TestComponent'
import {LinearGradient} from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { render } from 'react-dom'
import { set } from 'react-native-reanimated'
import { v4 as uuidv4 } from 'uuid'; 

export default class UploadImage extends React.Component {



    constructor(props){
        super(props);
        this.state = ({
            files: null
        })
    }

    handleChange = () => {
        this.state({
            files: files
        })

    }

    handleSave = () => {
        let bucketName = 'images'
        let file = this.state.files[0]
        let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`)
        let uploadTask = storageRef.put(file)
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            () => {
               let downloadURL = uploadTask.snapshot.downloadURL 
            })

    }

    showImage = () => {
        let storageRef = firebase.storage().ref()
        let spaceRef = storageRef.child('images/'+this.state.files[0].name)
        storageRef.child('images/'+this.state.files[0].name).getDownloadURL().then((url) => {
            console.log(url)
            document.getElementById('new-img').src = url
        })

    }
    render() {
        return (
           
            <View>
                <input type="file" onChange={(e) =>{this.handleChange(e.target.files)}} />
                <button onClick={this.handleSave}>Save></button>
                <button onClick={this.showImage}>Show image</button>
                <img id="new-img"/>
            </View>
            
        )
    }
}