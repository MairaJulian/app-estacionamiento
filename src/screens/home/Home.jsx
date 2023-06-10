import { StyleSheet, View, Button, FlatList, Text } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../../components/MyButton'
import Card from '../../components/Card'
import MyInput from '../../components/MyInput'
import RenderItem from './components/RenderItem'

const Home = ({ navigation }) => {

    const navegacionAddplace = () => {
        navigation.navigate("AddPlace")
    }

    const navegacionDetail = () => {
        navigation.navigate("Detail")
    }


    const test = [{ //BORRAR LUEGO DE CORROBORAR FUNCIONAMIENTO
        date: '11/11/1111',
        id: 11111,
        picture: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg',
        title: 'Titulo 1',
    },
    {
        date: '22/22/2222',
        id: 22222,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPAS_rNPYq5Bn9Gglol_ClXfKDxRHkMw-DgFB2uLC1w&s',
        title: 'Titulo 2',
    }]

    const [value, setValue] = useState("")
    console.log(value);
    return (
        <View style={styles.container}>
            {/* EJEMPLO COMPONENTES INICIO */}
            <MyButton
                title={"Ejempro boton"}
                sombra_low_or_high='high'
                isBold={true}
                onPress={() => { console.log('presionar boton') }}
            />

            <Card sombra_low_or_high='high' >
                <Text>Ejemplo card</Text>
            </Card>

            <MyInput value={value} setValue={setValue} />
            {/* EJEMPLO COMPONENTES FINAL */}

            <Button
                title="+"
                onPress={navegacionAddplace}

            />

            <FlatList
                data={test}
                renderItem={RenderItem}
                ItemSeparatorComponent={() => <Text>---------</Text>}
                keyExtractor={i => i.id}
                style={{ gap: 30 }}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})