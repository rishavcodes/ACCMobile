import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import MyComponent from "../Components/MyComponent";
import { Button } from "react-native-paper";
import BottomBar from "../Components/BottomBar";
import TopBar from "../Components/TopBar";
import SearchBar from "../Components/SearchBar";
import homepage from "../assets/homepage.png";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import theme from '../Pages/pageStyles/theme';





export default function Testing() {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground source={homepage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.header}>Aisha Comfortable Coliving</Text>
            <Text style={{ ...styles.header2, color: "#22293A" }}>
              Comfortable, Sustainable, and Community Oriented
            </Text>
          </View>

          <View style={{ marginTop: 350 }}>
            <StyledButton variant="pinkBtn" text="Sign In"></StyledButton>
          </View>
          <View>
            <Text style={{ ...styles.header2, color: "#fff" }}>Don’t have an account?</Text>
            <Button onPress={() => navigation.navigate("landing")}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  searchBar: {
    paddingHorizontal: 20,
  },
  flexB: {
    flex: 1,
  },
  header: {
    color: "#fff",
    marginTop: 30,
    fontWeight: 700,
    fontSize: 36,
    textAlign: "center",
  },
  header2: {
    marginTop: 20,
    fontWeight: 400,
    fontSize: 20,
    textAlign: "center",
  },
  top: {
    color: "#fff",
    marginTop: 100,
    fontWeight: "bold",
  },
  bottom: {
    flex: 1,
    marginBottom: 200,
  },
  boldText: {
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
