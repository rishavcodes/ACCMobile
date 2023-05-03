import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import homepage from "../assets/images/blueSignIn.png"
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import signStyles from "../Styles/Pages/signStyles.js";

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
       
        </View>
        <View style={signStyles.footer}>
            <View>
              <StyledButton  variant="contained" outerStyle={{backgroundColor:"#0045F1"}}  text="Sign In" link="login"/>
            </View>
            <View>
              <Text style={{ ...signStyles.header2, color: "#fff" }}>Don’t have an account?</Text>
              <StyledButton variant="text" text="Create Account" link="register"/>
            </View>
          </View>
      </ImageBackground>
    </>
  );
}

