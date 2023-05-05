import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, ImageBackground } from "react-native";
import { useTheme, Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { IconButton } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";



export default function ForgetPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("bye");
  const theme = useTheme();

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
      <View>
        <View style={{ paddingHorizontal: 20, paddingTop: 20, backgroundColor: "white" }}>
          <IconButton icon={() => <Ionicons name="arrow-back" size={24} />} onPress={handleBackPress} />
        </View>
      </View>
      <View style={theme.page}>
        <View style={{ backgroundColor: theme.white, paddingTop: 50 }}>
          <Text style={{ paddingHorizontal: 20, paddingBottom: 20, paddingTop: 20, fontWeight: "bold", fontSize: 32 }}>
            Forgot Password
          </Text>
        </View>
        <View style={theme.container}>
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
          <View style={{ paddingVertical: 20 }}>
            <StyledButton variant="pinkBtn" text="Reset Password" />
          </View>
        </View>
      </View>
    </>
  );
}
