import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import BottomBar from "../Components/BottomBar";
import TopBar from "../Components/TopBar";
import SearchBar from "../Components/SearchBar";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import theme from "../Styles/theme";
import ECard from "../Components/ECard";
import { SafeAreaView } from "react-native-safe-area-context";
import testingStyles from "../Styles/Pages/testingStyles"

export default function Testing() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={testingStyles.container}>
        <Text style={{ ...testingStyles.header2, color: "#22293A" }}>Testing</Text>

        <View style={testingStyles.cardContainer}>
          <ECard variant="eventMini"></ECard>
          <ECard variant="eventMini"></ECard>
          <ECard variant="eventMini"></ECard>
          <ECard variant="eventMini"></ECard>
        </View>
        <View style={testingStyles.cardContainer}>
          <ECard variant="housemate"></ECard>
        </View>
        <View style={testingStyles.cardContainer}>
          <ECard variant="listing"></ECard>
        </View>
        <View style={testingStyles.cardContainer}>
          <ECard variant="event"></ECard>
        </View>

        <View style={{ marginBottom: 50 }}>
          <StyledButton variant="pinkBtn" text="Return Onboarding" link="onboarding"></StyledButton>
        </View>
      </View>
    </ScrollView>
  );
}
