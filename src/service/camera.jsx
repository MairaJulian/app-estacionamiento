import * as Camera from 'expo-image-picker';
// import * as Camera2 from 'expo-camera'

export const verifyPermissionsCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    console.log(status);
    if (status !== 'granted') {
        Alert.alert(
            'Permisos insuficientes',
            'Necesitas otorgar los permisos necesarios',
            [{ text: 'Ok' }]
        )
        return false
    } else {
        const imagePath = await Camera.launchCameraAsync({
            allowsEditing: true,
            aspect: [1,1],
            quality: 1
        })
        return imagePath.assets[0].uri
    }
}

// export const permissionsCamera = 