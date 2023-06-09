import { StyleSheet, View, Button, FlatList } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {

    const navegacionAddplace = () => {
        navigation.navigate("AddPlace")
    }

    const navegacionDetail = () => {
        navigation.navigate("Detail")
    }

    return (
        <View>
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

const styles = StyleSheet.create({})