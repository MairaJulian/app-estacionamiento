import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import MyInput from '../../components/MyInput'
import Card from '../../components/Card'
import MyButton from '../../components/MyButton'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

const AddPlace = () => {

    const [value, setValue] = useState("")
    console.log(value);

    const handlePhoto = () => {
        console.log("tomar foto");
    }

    const handleLocation = () => {
        console.log("encontrar ubicacion");
    }

    const handleSave = () => {
        console.log("guardar");
    }

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.text1}>Add new location</Text>
                <Text style={styles.text2}>Title location</Text>
                <MyInput style={styles.input} setValue={setValue} value={value}/>
                <View style={styles.containePhoto}>
                    <MyButton title={<MaterialIcons name="add-a-photo" size={24} color="black" />} style={styles.photo} onPress={handlePhoto}/>
                </View>
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