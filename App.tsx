import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MainScreen from './MainScreen'
import ContactApp from './async/ContactApp'
import ReduxApp from './redux/ReduxApp'
import NavigationApp from './navigations/NavigationApp'
import ContactNavigation from './async/ContactNavigation'

const Stack = createNativeStackNavigator()
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='MainScreen' component={MainScreen} />
          <Stack.Screen name='Contact' component={ContactNavigation} />
          <Stack.Screen name='Redux' component={ReduxApp} />
          <Stack.Screen name='Navigation' component={NavigationApp} />
        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}

export default App