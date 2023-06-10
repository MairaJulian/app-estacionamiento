import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddPlace from './../../screens/addPlace/AddPlace';
import Home from '../../screens/home/Home';
import Detail from './../../screens/detail/Detail';
import { Ionicons } from '@expo/vector-icons'

const Stack = createStackNavigator()

const StackNavigator = () => {

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name="Home"
                component={Home}
                options={
                    ({ navigation }) => ({
                        headerRight: () =>
                            <Ionicons
                                name="md-add-circle"
                                size={24}
                                color="#0079FF"
                                onPress={() => navigation.navigate("AddPlace")}
                            />
                    })
                }
            />
            <Stack.Screen
                name="AddPlace"
                component={AddPlace}
            // options=""
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
            // options=""
            />
        </Stack.Navigator>
        // <View>
        //     <Text>Hola</Text>
        // </View>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})