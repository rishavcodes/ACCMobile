import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import BottomBar from "../Components/BottomBar";
import TopBar from "../Components/TopBar";
import SearchBar from "../Components/SearchBar";
import homepage from "../assets/images/homepage.png";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import signStyles from "../Pages/pageStyles/signStyles.js";

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <>
      <ImageBackground source={homepage} style={signStyles.backgroundImage}>
        <View style={signStyles.container}>
          <View style={signStyles.top}>
            <Text style={signStyles.header}>Aisha Comfortable Coliving</Text>
            <Text style={{ ...signStyles.header2, color: "#22293A" }}>
              Comfortable, Sustainable, and Community Oriented
            </Text>
          </View>

          <View style={{ marginTop: 350 }}>
            <StyledButton variant="pinkBtn" text="Sign In" link="login"/>
          </View>
          <View>
            <Text style={{ ...signStyles.header2, color: "#fff" }}>Don’t have an account?</Text>
            <Button onPress={() => navigation.navigate("register")}>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 20,
                  textAlign: "center",
                  color: "#fff",
                  textDecorationLine: "underline",
                }}>
                Create Account
              </Text>
            </Button>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

