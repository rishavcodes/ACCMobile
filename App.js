import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import MyComponent from "./Components/MyComponent";
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="onboarding" component={OnBoarding} />
          <Stack.Screen name="signin" component={SignIn} />
          <Stack.Screen name="landing" component={Landing} />
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
