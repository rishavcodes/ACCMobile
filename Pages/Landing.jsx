import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import MyComponent from "../Components/MyComponent";
import { Button } from "react-native-paper";
import BottomBar from "../Components/BottomBar";
import TopBar from "../Components/TopBar";
import SearchBar from "../Components/SearchBar";
import StyledButton from "../Components/StyledButton";

export default function Landing() {
  return (
    <>
      <TopBar title="Search" />

      <View style={styles.searchBar}>
        <SearchBar />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.top}>
            
            <StyledButton variant='pinkBtn' text='Press Me'/>
            <Text>Things to do: </Text>
            <Text>Filter beside search bar </Text>
            <Text>Side Hamborger bar </Text>
            <Text>Toggle button </Text>
            <Text>Cards </Text>
            <Text>Home page </Text>
            <Text>Notifications </Text>
          </View>
          <View>
            <Text>Things to do: </Text>
            <Text>Filter beside search bar </Text>
            <Text>Side Hamborger bar </Text>
            <Text>Toggle button </Text>
            <Text>Cards </Text>
            <Text>Home page </Text>
            <Text>Notifications </Text>
          </View>
          <View>
            <Text>Things to do: </Text>
            <Text>Filter beside search bar </Text>
            <Text>Side Hamborger bar </Text>
            <Text>Toggle button </Text>
            <Text>Cards </Text>
            <Text>Home page </Text>
            <Text>Notifications </Text>
          </View>
          <View>
            <Text>Things to do: </Text>
            <Text>Filter beside search bar </Text>
            <Text>Side Hamborger bar </Text>
            <Text>Toggle button </Text>
            <Text>Cards </Text>
            <Text>Home page </Text>
            <Text>Notifications </Text>
          </View>
          <View>
            <Text>Things to do: </Text>
            <Text>Filter beside search bar </Text>
            <Text>Side Hamborger bar </Text>
            <Text>Toggle button </Text>
            <Text>Cards </Text>
            <Text>Home page </Text>
            <Text>Notifications </Text>
          </View>
          <View style={styles.bottom}>
            <Text>Things to do: </Text>
            <Text>Filter beside search bar </Text>
            <Text>Side Hamborger bar </Text>
            <Text>Toggle button </Text>
            <Text>Cards </Text>
            <Text>Home page </Text>
            <Text>Notifications </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.flexB}>
        <BottomBar />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  searchBar: {
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  flexB: {
    flex: 1,
  },
  bottom: {
    marginBottom: 200,
  },
  top: {
    marginTop: 100,
  },
  boldText: {
    fontWeight: "bold",
  },
});
