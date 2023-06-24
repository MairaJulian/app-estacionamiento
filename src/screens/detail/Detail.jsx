import { Button, Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../../components/Card';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const Detail = ({ route }) => {
    console.log(route.params.item);
    const {date, picture, title, latitud, longitud} = route.params.item

        const regionInicial = {
            latitude: latitud,  // Latitud de la ubicación inicial
            longitude: longitud,  // Longitud de la ubicación inicial
            latitudeDelta: 0.0115,  // Delta de latitud (zoom inicial)
            longitudeDelta: 0.0052,  // Delta de longitud (zoom inicial)
        }

        const coordsActuales = {
            latitude: latitud,  // Latitud del marcador
            longitude: longitud,  // Longitud del marcador
        }

        const iniciarNavegacionACoordenadas = () => {
            const url = `https://www.google.com/maps/dir/?api=1&destination=${latitud},${longitud}&travelmode=walking`;
            Linking.openURL(url);
        };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Card style={styles.card}>
                    <Text style={styles.text1}>Title: {title}</Text>
                    <Image source={{uri:picture}} style={styles.image}/>
                    <Text style={styles.text2}>Date: {date}</Text>
                    <Text style={styles.text2}>Latitud: {latitud}</Text>
                    <Text style={styles.text2}>Longitud: {longitud}</Text>
                    <View style={styles.mapContainer}>
                        <MapView style={styles.map} initialRegion={regionInicial}>
                            <Marker coordinate={coordsActuales} title='Mi casa'/>
                        </MapView>
                    </View>
                    <Button title='Llevame a mi auto' onPress={iniciarNavegacionACoordenadas}/>
                </Card>
            </ScrollView>
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
    },
    mapContainer: {
        height: 200,
        width: "100%"
    },
    map: {
        height: 200,
        width: "100%"
    }
})