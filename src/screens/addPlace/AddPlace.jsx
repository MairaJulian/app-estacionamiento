import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import MyInput from '../../components/MyInput'
import Card from '../../components/Card'
import MyButton from '../../components/MyButton'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { addPlaceDB } from '../../store/locations/LocationSlice'
import { CurrentlyDate, CurrentlyHour } from '../../service/currentlyDate'
import { verifyPermissionsLocation } from '../../service/location'
import { verifyPermissionsCamera } from '../../service/camera'
import { moveFile } from '../../service/fileSystem'

const AddPlace = ({navigation}) => {

    const [value, setValue] = useState("")
    console.log(value);
    const [latitud, setLatitud] = useState(null)
    const [longitud, setLongitud] = useState(null)
    const [image, setImage] = useState(null)

    const dispatch = useDispatch()

    const handlePhoto = async() => {
        const camera = await verifyPermissionsCamera()
        console.log(camera);
        setImage(camera)
    }

    const handleLocation = async() => {
        const {latitud, longitud} = await verifyPermissionsLocation()
        console.log("=========");
        console.log(latitud);
        console.log(longitud);
        setLatitud(latitud)
        setLongitud(longitud)
    }

    const handleSave = async() => {
        console.log("guardar")

        const title = value
        const picture = await moveFile({path:image})
        const id = Date.now()

        const place = {
            id: id,
            date: CurrentlyDate(),
            horasYMinutos: CurrentlyHour(),
            picture: picture,
            title: title,
            latitud: latitud,
            longitud: longitud
        }
        console.log(place);
        // dispatch(addPlace(place))
        dispatch(addPlaceDB(place))
        setValue("")
        navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.text1}>Add new location</Text>
                <Text style={styles.text2}>Title location</Text>
                <MyInput style={styles.input} setValue={setValue} value={value} />
                <View style={styles.containePhoto}>
                    <MyButton title={<MaterialIcons name="add-a-photo" size={24} color="black" />} style={styles.photo} onPress={handlePhoto}/>
                </View>
                {
                    image && <Image style={{height:100, width:100}} source={{uri:image}}/>
                }
                <View style={styles.containeLocation}>
                    <MyButton title={<Ionicons name="location-sharp" size={24} color="black" />} style={styles.location} onPress={handleLocation}/>
                </View>
                <View style={styles.containeSave}>
                    <MyButton title={"SAVE"} style={styles.save} onPress={handleSave}/>
                </View>
            </Card>
        </View>
    )
}

export default AddPlace

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        backgroundColor: "#8EA7E9"
    },
    card: {
        margin: 30,
        padding: 15,
        gap: 10, 
        flex: 1,
    },
    text1: {
        flex: 1,
        fontSize: 30,
        // marginBottom: 20
    },
    text2: {
        
        fontSize: 22
    },
    input: {
        // flex: 1,
        marginBottom: 55
    },
    containePhoto: {
        flex: 1,
        // backgroundColor: "yellow"
    },
    photo: {
        height: 40,
        justifyContent: "center",
        backgroundColor: "#7286D3",
    },
    containeLocation: {
        flex: 1,
        // backgroundColor: "yellow"
    },
    location: {
        height: 40,
        justifyContent: "center",
        backgroundColor: "#7286D3",
    },
    containeSave: {
        flex: 1,
        // backgroundColor: "yellow"
    },
    save: {
        height: 40,
        justifyContent: "center",
        backgroundColor: "#7286D3"
    }
})