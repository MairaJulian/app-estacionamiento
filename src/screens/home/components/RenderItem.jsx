import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from '../../../components/Card'


const RenderItem = ({ item, navegacionDetail }) => {

    const handlePress = () => {
        navegacionDetail()
    }

    return (
        <Card sombra_low_or_high='low' >
            {/* <TouchableOpacity style={styles.contain} > */}
            <TouchableOpacity style={styles.contain} onPress={handlePress}>
                <Image source={{ uri: item.picture }} style={styles.image} />
                <View style={styles.detailContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.date}</Text>
                    <Text>{item.id}</Text>
                </View>
            </TouchableOpacity>
        </Card>
    )
}

export default RenderItem

const styles = StyleSheet.create({
    contain: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 5,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        alignSelf: 'center',
    },
    detailContainer: {
        flex: 1,
        paddingHorizontal: 10,
        // alignItems: 'flex-end'
    }
})