import React, { Component } from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


interface IProps {
  navigation: any
}
interface IState {
  contacts: Array<any>
}
export class ContactApp extends Component<IProps> {
  state: IState = {
    contacts: []
  }
  componentDidMount(): void {
    this.getData()
  }
  getData = async () => {
    let email = await AsyncStorage.getItem("email")


    let result = JSON.parse(await AsyncStorage.getItem("Contacts") || "{}")
    console.log(result)
    this.setState({ contacts: result })
    console.log("cotacts", this.state.contacts)

  }
  deleteContact = async (parameter: any) => {
    let tempData = this.state.contacts
    let selectedData = tempData.filter((item) => {
      return item.id !== parameter.id
    })
    this.setState({ contacts: selectedData })
    await AsyncStorage.setItem("Contacts", JSON.stringify(selectedData))
  }
  handleLogout = async () => {
    await AsyncStorage.setItem("email", "")
    this.props.navigation.navigate("login")
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <StatusBar barStyle={'light-content'} />
        <View style={{ flex: 1, backgroundColor: "#E7E8D1" }} >
          <View style={{ backgroundColor: "#408EC6", height: "10%", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 30, fontStyle: "italic" }}>CONTACTS</Text>
          </View>
          <ScrollView>
            {
              this.state.contacts.map((item: any) => {
                return (
                  <View key={item.id} style={{ backgroundColor: "#A7BEAE", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", height: 100, margin: "2%" }}>
                    <Text style={{ color: "#7A2048", fontWeight: "bold", fontSize: 17 }}>{item.name.toUpperCase()}</Text>
                    <Text>{item.mobile}</Text>
                    <TouchableOpacity onPress={() => this.deleteContact(item)} style={{ backgroundColor: "#CC313D", width: "10%", height: "30%", justifyContent: "center", alignItems: "center" }}>
                      <Text style={{ color: "white", fontWeight: "bold" }}>X</Text>
                    </TouchableOpacity>
                  </View>

                )
              })
            }
          </ScrollView>

          <TouchableOpacity onPress={this.handleLogout} style={{ backgroundColor: "#CC313D", width: "20%", borderRadius: 30, height: "7%", position: "absolute", bottom: 20, left: 20, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Sign out</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("addcontact")} style={{ backgroundColor: "#1E2761", width: "50%", borderRadius: 30, height: "7%", position: "absolute", bottom: 20, right: 20, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Add New Contact</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

export default ContactApp
