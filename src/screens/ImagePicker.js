import React from 'react'
import {View, Button, Image, StyleSheet} from 'react-native'
import ImagePicker from 'react-native-image-picker'

const ImagePicker = ({image, onImagePicked}) => {


    pickImageHandler = () => {

        ImagePicker
    }


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={}/>
            </View>
            <View style={styles.button}>
                <Button title="Pick Image" onPress={this.pickImageHandler}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        align:'center'
    },
    imageContainer: {
        borderWidth:1,
        borderColor:'black',
        width:'80%',
        height:150
    },
    button:{
        margin: 8
    }
})
