import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const InfoComponent = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            {/* <Feather name="search" style={styles.iconStyle} /> */}
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="search"
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                //onChangeText={onTermChange}  shorten
                //onEndEditing={() => onTermSubmit()}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}
const styles = StyleSheet.create({

    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    background: {
        // backgroundColor: '#F0EEEE',
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
        //github.com/expo/vector-icons

    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 20
    }

})

export default InfoComponent