import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
interface IState {
    email: string,
    password: string,
    checkEmail: string,
    checkPassword: string,
    resultMessage: string,
}
interface IProps {
    navigation: any
}
export class Login extends Component<IProps> {
    state: IState = {
        email: "",
        password: "",
        checkEmail: "krishnamarty@gmail.com",
        checkPassword: "krishna@123",
        resultMessage: ""
    }
    handleLogin = async () => {
        if (this.state.email === this.state.checkEmail) {
            if (this.state.password === this.state.checkPassword) {
                try {
                    await AsyncStorage.setItem("email", this.state.email)
                    await AsyncStorage.setItem("password", this.state.password)
                    this.props.navigation.navigate("contacts")
                }
                catch (e) {
                    console.log(e, "error")
                }
            } else {
                this.setState({ resultMessage: "Password is incorrect" })
            }
        }
        else {
            this.setState({ resultMessage: "Email is incorrect" })
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
                <StatusBar barStyle={'light-content'} />
                <View style={{ backgroundColor: "#E7E8D1", flex: 1, justifyContent: "center" }}>
                    <View style={style.loginContainer}>
                        <Text style={style.loginText}>Login</Text>
                        <View style={{ height: "90%", justifyContent: "space-evenly" }}>
                            <TextInput value={this.state.email} onChangeText={(value) => this.setState({ email: value })} style={style.inputField} placeholder='Enter Email Id' placeholderTextColor={"black"}></TextInput>
                            <TextInput value={this.state.password} onChangeText={(value) => this.setState({ password: value })} style={style.inputField} placeholder='Enter Password' placeholderTextColor={"black"}
                                secureTextEntry ></TextInput>
                            <TouchableOpacity onPress={this.handleLogin} style={style.button}>
                                <Text style={{ color: "#A7BEAE", fontSize: 20 }}>Login</Text>
                            </TouchableOpacity>
                            <Text style={{ color: "red", alignSelf: "center" }}>{this.state.resultMessage}</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("MainScreen")} style={{ alignSelf: 'flex-end' }}>
                                <Text style={{ color: "black", fontSize: 17 }}>{`< = `}Go to Main Screen</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>
            </SafeAreaView>
        )
    }
}

export default Login
const style = StyleSheet.create({
    loginContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.1)", height: "50%", marginHorizontal: "5%", borderRadius: 20, padding: "10%"
    },
    loginText: {
        color: "#B85042", fontSize: 27, fontWeight: "600", letterSpacing: 2
    },
    inputField: {
        borderBottomColor: "#B85042", width: "100%", alignSelf: "center", borderWidth: 0.5, height: "15%", padding: "5%", borderRadius: 15
    },
    button: {
        backgroundColor: "#B85042", width: "100%", height: "15%", borderRadius: 15, justifyContent: "center", alignItems: "center", padding: "2%"
    }
})