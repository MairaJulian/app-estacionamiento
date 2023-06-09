import { StyleSheet, View } from 'react-native'
import React from 'react'

const Card = ({ sombra_low_or_high = 'medium', children, style }) => {

    const sombra1 = {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
    const sombra2 = {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    }
    const sombra3 = {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    }

    var sombra = {}
    if (sombra_low_or_high == 'low') {
        sombra = sombra1
    } else if (sombra_low_or_high == 'high') {
        sombra = sombra3
    } else {
        sombra = sombra2
    }

    return (
        <View style={{ ...sombra, ...styles.card, ...style }}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
    }
})