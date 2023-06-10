import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const MyInput = ({ value, setValue, style, placeholder = 'Insert text...' }) => {
    return (
        <TextInput value={value} onChangeText={setValue} style={{ ...styles.input, ...style }} placeholder={placeholder} />
    )
}

export default MyInput

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        padding: 3,
        paddingHorizontal: 6
    }
})