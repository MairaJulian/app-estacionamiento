import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../../components/Card';

const Detail = ({route}) => {
    console.log(route.params.item);
    const {date, picture, title} = route.params.item
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.text1}>Title: {title}</Text>
                <Image source={{uri:picture}} style={styles.image}/>
                <Text style={styles.text2}>Date: {date}</Text>
            </Card>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8EA7E9"
    },
    card: {
        flex: 1,
        margin: 20,
        alignItems: "center",
        justifyContent: "space-around"
    },
    image: {
        width: 280,
        height: 280,
        borderRadius: 5,
        resizeMode: 'cover',
    },
    text1: {
        fontSize: 26
    },
    text2: {
        fontSize: 18
    }
})