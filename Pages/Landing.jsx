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
import { TextInput } from "react-native-paper";
import landingStyles from '../Pages/pageStyles/landingStyles.js';


export default function Landing() {
  const [text, setText] = React.useState("");
  return (
    <>
      <TopBar title="Search" />

      <View style={styles.searchBar}>
        <SearchBar />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.top}>
            <TextInput
              label="Email*"
              value={text}
              onChangeText={(text) => setText(text)}
              style={{ backgroundColor: "#FFF", width: "80%" }}
              required
            />
            <TextInput
              label="Password*"
              value={text}
              onChangeText={(text) => setText(text)}
              style={{ backgroundColor: "#FFF", width: "80%" }}
              required
            />
            <StyledButton variant="pinkBtn" text="Login" />
          </View>
          <View style={styles.top}>
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
  
});
