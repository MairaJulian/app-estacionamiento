import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import MyInput from '../../components/MyInput'
import Card from '../../components/Card'
import MyButton from '../../components/MyButton'

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
                <MyButton title={"PHOTO"} style={styles.photo} onPress={handlePhoto}/>
                <MyButton title={"LOCATION"} style={styles.location} onPress={handleLocation}/>
                <MyButton title={"SAVE"} style={styles.save} onPress={handleSave}/>
            </Card>
        </View>
    )
}

export default AddPlace

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#911F27"
    },
    card: {
        margin: 10,
        padding: 15,
        gap: 10
    },
    text1: {
        fontSize: 24,
        marginBottom: 20
    },
    text2: {
        fontSize: 18
    },
    input: {
        marginBottom: 15
    },
    photo: {
        // marginBottom: 10
    },
    location: {
        
    },
    save: {

    }
})