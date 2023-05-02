import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { IconButton } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import landingStyles from "../Styles/Pages/landingStyles.js";
import theme from "../Styles/theme.js";
import SignInHeader from "../Components/SignInHeader";

export default function ForgetPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("bye");

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleOnClick = (e) => {
    if (text !== "hi") {
      setText("hi");
    } else {
      setText("bye");
    }
  };

  return (
    <>
      <SignInHeader title={"Forgot Password"}/>
      <View style={{...theme.page,paddingTop:0,paddingBottom:200,marginTop:0}}>

        <View style={landingStyles.container}>
          <TextInput
            label="Email*"
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={theme.textField}
            required
          />
          <TextInput
            label="Confirm Email Address*"
            value={password}
            onChangeText={(password) => setPassword(password)}
            style={theme.textField}
            required
          />
          <TextInput
            label="Create Password*"
            value={password}
            onChangeText={(password) => setPassword(password)}
            style={theme.textField}
            required
          />
          <TextInput
            label="Confirm Password*"
            value={password}
            onChangeText={(password) => setPassword(password)}
            style={theme.textField}
            required
          />
          <View style={{ paddingVertical: 30 }}>
            <StyledButton variant="contained"  outerStyle={{backgroundColor:"#0045F1"}} text="Reset Password" />
          </View>
        </View>
      </View>
    </>
  );
}
