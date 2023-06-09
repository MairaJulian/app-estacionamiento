import { StyleSheet, View, Button, FlatList, Text } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../../components/MyButton'
import Card from '../../components/Card'
import MyInput from '../../components/MyInput'

const Home = ({ navigation }) => {

    const navegacionAddplace = () => {
        navigation.navigate("AddPlace")
    }

    const navegacionDetail = () => {
        navigation.navigate("Detail")
    }

    const [value, setValue] = useState("")
    return (
        <View style={styles.container}>
            {/* EJEMPLO COMPONENTES INICIO */}
            <MyButton
                title={"Ejempro boton"}
                sombra_low_or_high='high'
                isBold={true}
                onPress={() => { console.log('presionar boton') }}
            />

            <Card sombra_low_or_high='high'>
                <Text>Ejemplo card</Text>
            </Card>

            <MyInput value={value} setValue={setValue} />
            {/* EJEMPLO COMPONENTES FINAL */}

            <Button
                title="+"
                onPress={navegacionAddplace}
            />
            {/* <FlatList
                data={}
                renderItem={}
                keyExtractor={}
            /> */}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
})