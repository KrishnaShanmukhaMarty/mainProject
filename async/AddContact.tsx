import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
interface IState {
    name: string,
    mobile: string
}
interface IProps {
    navigation: any
}
let contacts: any[] = []
export class AddContact extends Component<IProps> {
    state: IState = {
        name: "",
        mobile: ""
    }
    saveContact = async () => {
        let tempContact = []
        let x = JSON.parse(await AsyncStorage.getItem("Contacts") || "[]")
        tempContact = x
        tempContact.map((item: any) => {
            contacts.push(item)
        })
        contacts.push({ id: Math.floor(Math.random() * 1000000), name: this.state.name, mobile: this.state.mobile })
        await AsyncStorage.setItem("Contacts", JSON.stringify(contacts))
        this.props.navigation.goBack()
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
                <StatusBar barStyle={'light-content'} />
                <View style={{ flex: 1, backgroundColor: "#E7E8D1", justifyContent: "center", paddingHorizontal: "10%" }} >
                    <View style={{ height: "60%", backgroundColor: "rgba(0,0,0,0.2)", padding: "5%", borderRadius: 20, justifyContent: "space-evenly" }}>
                        <TextInput value={this.state.name} onChangeText={(value) => this.setState({ name: value })} style={style.inputField} placeholder='Enter Name' placeholderTextColor={"black"}></TextInput>
                        <TextInput keyboardType='numeric' value={this.state.mobile} onChangeText={(value) => this.setState({ mobile: value })} style={style.inputField} placeholder='Enter Mobile' placeholderTextColor={"black"}
                        ></TextInput>
                        <TouchableOpacity onPress={this.saveContact} style={style.button}>
                            <Text style={{ color: "#A7BEAE", fontSize: 20 }}>Save Contact</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default AddContact
const style = StyleSheet.create({
    inputField: {
        borderBottomColor: "#B85042", width: "100%", alignSelf: "center", borderWidth: 0.5, height: "15%", padding: "5%", borderRadius: 15,
    },
    button: {
        backgroundColor: "#1E2761", width: "100%", height: "15%", borderRadius: 15, justifyContent: "center", alignItems: "center", padding: "2%"
    }
})