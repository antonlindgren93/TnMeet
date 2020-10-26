import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import { MessageCons } from './../../constants/MessageCons'
import MessageDeatails from './MessageDetails'
import TopPics from '../components/TopPics'

class Messages extends React.Component {

    render() {
        console.log(MessageCons)
        return (
            <SafeAreaView>
                <ScrollView>
                    {MessageCons.map((user, i) => (
                        <ListItem

                            key={i}
                            leftAvatar={{ source: user.pic, size: 'large' }}
                            title={user.title}
                            titleStyle={styles.title}
                            subtitle={user.message}
                            subtitleStyle={styles.subtitle}
                            chevron
                        />
                    ))}
                </ScrollView>
             
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#3F3F3F',
    },
    subtitle: {
        color: '#A5A5A5',
    },
})

export default Messages