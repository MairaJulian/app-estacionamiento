import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddPlace from './../../screens/addPlace/AddPlace';
import Home from '../../screens/home/Home';
import Detail from './../../screens/detail/Detail';

const StackNavigator = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name="Home"
                component={Home}
            // options=""
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