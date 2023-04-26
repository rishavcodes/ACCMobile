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
import themeStyles from "../Pages/pageStyles/theme.js";
import loginStyles from "./pageStyles/loginStyles";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <View style={{ paddingHorizontal: 20, paddingTop: 20, backgroundColor: "#0045F1" }}>
          <IconButton icon={() => <Ionicons name="arrow-back" size={24} color="white" />} onPress={handleBackPress} />
        </View>
        <View style={{ alignItems: "center", backgroundColor: "#0045F1", paddingTop: 100 }}>
          <Text
            style={{
              ...themeStyles.header,
              paddingHorizontal: 20,
              paddingVertical: 20,
              color: themeStyles.white,
              fontSize: 28,
              textAlign: "center",
            }}>
            Welcome back to Aisha Comfortable Coliving
          </Text>
        </View>
      </View>
      <View style={themeStyles.page}>
        <View style={{ backgroundColor: themeStyles.white, paddingTop: 50 }}>
          <Text style={{ paddingHorizontal: 20, paddingBottom: 20, paddingTop: 20, fontWeight: "bold", fontSize: 32 }}>
            Sign in
          </Text>
        </View>

        <View style={loginStyles.container}>
          
            <TextInput
              label="Email*"
              value={email}
              onChangeText={(email) => setEmail(email)}
              style={{ backgroundColor: "#FFF", width: "100%" }}
              required
            />
            <TextInput
              label="Password*"
              value={password}
              onChangeText={(password) => setPassword(password)}
              style={{ backgroundColor: "#FFF", width: "100%" }}
              required
            />
          
          <View style={{ paddingVertical: 20 }}>
            <StyledButton variant="pinkBtn" text="Login" link="navmanager"/>
          </View>
          
          <View>
            <Button onPress={() => navigation.navigate("forgotpassword")}>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 20,
                  textAlign: "center",
                  textDecorationLine: "underline",
                  paddingTop: 20,
                }}>
                Forgot password?
              </Text>
            </Button>
            <Text style={{ ...themeStyles.header2 }}>Don’t have an account?</Text>

            <Button onPress={() => navigation.navigate("register")}>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 20,
                  textAlign: "center",
                  textDecorationLine: "underline",
                }}>
                Create Account
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </>
  );
}
