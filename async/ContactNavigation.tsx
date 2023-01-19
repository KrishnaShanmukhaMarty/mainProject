import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Intro from './Intro'
import Login from './Login'
import ContactApp from './ContactApp'
import AddContact from './AddContact'
const Stack = createNativeStackNavigator()
export class ContactNavigation extends Component {
    render() {
        return (

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="intro" component={Intro} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="contacts" component={ContactApp} />
                <Stack.Screen name="addcontact" component={AddContact} />
            </Stack.Navigator>

        )
    }
}

export default ContactNavigation