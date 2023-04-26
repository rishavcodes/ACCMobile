import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import BottomBar from "../Components/BottomBar";
import TopBar from "../Components/TopBar";
import SearchBar from "../Components/SearchBar";
import homepage from "../assets/homepage.png";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import theme from "../Pages/pageStyles/theme";
import ECard from "../Components/ECard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Testing() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={{ ...styles.header2, color: "#22293A" }}>Testing</Text>
        </View>
        <View style={styles.cardContainer}>
          <ECard variant="housemate"></ECard>
        </View>
        <View style={styles.cardContainer}>
          <ECard variant="listing"></ECard>
        </View>
        <View style={styles.cardContainer}>
          <ECard variant="event"></ECard>
        </View>

        <View style={{ marginBottom: 50 }}>
          <StyledButton variant="pinkBtn" text="Return Onboarding" link="onboarding"></StyledButton>
        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
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
