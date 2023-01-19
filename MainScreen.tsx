import React, { Component } from 'react'
import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
interface IProps {
  navigation: any
}
export class MainScreen extends Component<IProps> {
  render() {

    return (
      <SafeAreaView style={{ backgroundColor: "black", flex: 1 }} >
        <StatusBar barStyle={'light-content'} />
        <ImageBackground source={{ uri: "https://res.cloudinary.com/dpcu0aall/image/upload/v1674104400/finalApp/pexels-sebastian-palomino-1955134_s8dpwz.jpg" }} style={{ flex: 1, justifyContent: "center" }} resizeMode="cover" >
          <View style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", height: "60%", marginHorizontal: "5%", borderRadius: 20, padding: "10%" }}>
            <Text style={{ color: "#E0A96D", fontSize: 20, fontWeight: "bold", marginLeft: "auto", marginRight: "auto" }}>React Native App Directory</Text>
            <View style={{ justifyContent: "space-evenly", alignItems: "center", height: "100%" }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Contact")} style={{ backgroundColor: "#DDC3A5", padding: "5%", borderRadius: 10, width: "100%", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 15, fontWeight: "600", letterSpacing: 2 }}>Go To Contacts</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Redux")} style={{ backgroundColor: "#DDC3A5", padding: "5%", borderRadius: 10, width: "100%", alignItems: "center" }}>
                <Text style={{ fontSize: 15, fontWeight: "600", letterSpacing: 2 }}>Go To Redux App</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Navigation")} style={{ backgroundColor: "#DDC3A5", padding: "5%", borderRadius: 10, width: "100%", alignItems: "center" }}>
                <Text style={{ fontSize: 15, fontWeight: "600", letterSpacing: 2 }}>Go To Navigations App</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

export default MainScreen
