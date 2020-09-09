import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'


const ManageHobbies = () => {

    const stateDisplay = { currentUser: null }
    const { currentUser } = stateDisplay
    return (
        <View style={styles.container}>
            <Text>
                Hi {currentUser && currentUser.email}!
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ManageHobbies