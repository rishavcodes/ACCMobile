import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import BottomBar from "../Components/BottomBar";
import TopBar from "../Components/TopBar";
import SearchBar from "../Components/SearchBar";
import homepage from "../assets/homepage.png";
import homepage2 from "../assets/homepage.png";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { IconButton } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Login() {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={{paddingHorizontal: 20, paddingTop: 100, backgroundColor: "#0045F1", }}>
        <IconButton icon={() => <Ionicons name="arrow-back" size={24} color="white" />} onPress={handleBackPress} />
      </View>
      <View style={{alignItems: "center", backgroundColor: "#0045F1",}}>
        <Text style={styles.header}>Aisha Comfortable Coliving</Text>
        <Text style={{ ...styles.header2, color: "#22293A" }}>Comfortable, Sustainable, and Community Oriented</Text>
      </View>
      <TopBar title="Login" />

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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
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
    alignItems: "center",
    width: "100%",
  },
  boldText: {
    fontWeight: "bold",
  },
});
