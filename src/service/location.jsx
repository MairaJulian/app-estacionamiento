import * as Location from 'expo-location';
import { Alert } from 'react-native';

export const verifyPermissionsLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    if (status !== 'granted') {
        Alert.alert(
            'Permisos insuficientes',
            'Necesitas otorgar los permisos necesarios',
            [{ text: 'Ok' }]
        )
        return false
    } else {
        const location = await Location.getCurrentPositionAsync({})
        console.log("----------");
        console.log(location);
        console.log(location.coords);
        const latitud = location.coords.latitude
        const longitud = location.coords.longitude

        return {latitud, longitud}
    }
}

// export const getLocation = async () => {
//     const location = await Location.getCurrentPositionAsync({})
//     console.log(location);
//     const latitud = location.latitude
//     const longitud = location.longitude

//     return {latitud, longitud}
// }