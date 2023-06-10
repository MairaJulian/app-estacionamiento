import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from './Card'

const MyButton = ({ title, sizeText = 20, style, isBold = false, sombra_low_or_high = 'medium', onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Card sombra_low_or_high={sombra_low_or_high} style={{ ...styles.button, ...style }}>
                <Text style={{ ...styles.text, fontSize: sizeText, fontWeight: isBold ? 'bold' : 'normal' }} > {title}</Text>
            </Card>
        </TouchableOpacity >
    )
}

export default MyButton

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 0,
        borderWidth: 1,
        borderColor: 'grey'
    },
    text: {
        alignSelf: 'center',
        justifyContent: 'center'
    }
})