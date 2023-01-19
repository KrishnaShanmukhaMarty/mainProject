import { StatusBar, Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
interface IProps {
    navigation: any
}
export class Intro extends Component<IProps> {
    componentDidMount(): void {
        setTimeout(() => {
            this.checkLogin()
        }, 3000)
    }
    checkLogin = async () => {
        let email = await AsyncStorage.getItem("email")
        let password = await AsyncStorage.getItem("password")
        if (email !== null) {
            this.props.navigation.navigate("contacts")
        }
        else {
            this.props.navigation.navigate("login")
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
                <StatusBar barStyle={'light-content'} />
                <View style={{ flex: 1, backgroundColor: "#E7E8D1", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#B85042", fontSize: 25, fontWeight: "bold", letterSpacing: 5 }}>Welcome to Contacts</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Intro