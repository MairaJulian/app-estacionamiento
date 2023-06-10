import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Detail = ({route}) => {
    console.log(route.params.item);
    return (
        <View>
            <Text>Detail</Text>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({})