import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import BottomBar from "./Components/BottomBar";
import TopBar from "./Components/TopBar";
import SearchBar from "./Components/SearchBar";
import Landing from "./Pages/Landing";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Testing from "./Pages/Testing";
import OnBoarding from "./Pages/OnBoarding";
import SignIn from "./Pages/SignIn";
import Login from "./Pages/Login";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F83E7D",
    accent: "#f1c40f",
  },
};

export default function App() {
  const [loaded] = useFonts({
    msBlack: require("./assets/fonts/Montserrat-Black.ttf"),
    msBlackItalic: require("./assets/fonts/Montserrat-BlackItalic.ttf"),
    msBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    msBoldItalic: require("./assets/fonts/Montserrat-BoldItalic.ttf"),
    msExtraBold: require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    msExtraBoldItalic: require("./assets/fonts/Montserrat-ExtraBoldItalic.ttf"),
    msExtraLight: require("./assets/fonts/Montserrat-ExtraLight.ttf"),
    msExtraLightItalic: require("./assets/fonts/Montserrat-LightItalic.ttf"),
    msItalic: require("./assets/fonts/Montserrat-Italic.ttf"),
    msLight: require("./assets/fonts/Montserrat-Light.ttf"),
    msLightItalic: require("./assets/fonts/Montserrat-LightItalic.ttf"),
    msMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    msMediumItalic: require("./assets/fonts/Montserrat-MediumItalic.ttf"),
    msRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    msSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    msSemiBoldItalic: require("./assets/fonts/Montserrat-SemiBoldItalic.ttf"),
    msThin: require("./assets/fonts/Montserrat-Thin.ttf"),
    msThinItalic: require("./assets/fonts/Montserrat-ThinItalic.ttf"),
  });
  if (!loaded) {
    return null;
  }

  
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="onboarding" component={OnBoarding} />
          <Stack.Screen name="signin" component={SignIn} />
          <Stack.Screen name="landing" component={Landing} />
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  flexB: {
    flex: 1,
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
});
