import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from './Card'

const MyButton = ({ title, sizeText = 20, style, isBold = false, sombra_low_or_high = 'medium', onPress }) => {
    return (
        <Card sombra_low_or_high={sombra_low_or_high} style={{ padding: 0 }}>
            <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPress}>
                <Text style={{ ...styles.text, fontSize: sizeText, fontWeight: isBold ? 'bold' : 'normal' }} > {title}</Text>
            </TouchableOpacity >
        </Card>
    )
}

export default MyButton

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 3,
        borderWidth: 1,
        borderColor: 'grey'
    },
    text: {
        alignSelf: 'center',
        justifyContent: 'center'
    }
})