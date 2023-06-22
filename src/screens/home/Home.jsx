import { StyleSheet, View, Button, FlatList, Text } from 'react-native'
import React, { useState } from 'react'
import MyButton from '../../components/MyButton'
import Card from '../../components/Card'
import MyInput from '../../components/MyInput'
import RenderItem from './components/RenderItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getFromLocalDBRedux } from '../../store/locations/LocationSlice'

const Home = ({ navigation }) => {

    const navegacionAddplace = () => {
        navigation.navigate("AddPlace")
    }

    const locationSelector = useSelector((state) => state.location.places)
    // console.log(locationSelector);

    const [value, setValue] = useState("")
    // console.log(value);

    useEffect(() => {
        dispatch(getFromLocalDBRedux())
    }, [])
    

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
                data={locationSelector}
                renderItem={(i) => (<RenderItem item={i.item} navigation={navigation} />)}
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