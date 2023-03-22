import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import MyComponent from "./Components/MyComponent";
import { Button } from "react-native-paper";
import BottomBar from "./Components/BottomBar";
import TopBar from "./Components/TopBar";
import SearchBar from "./Components/SearchBar";

export default function App() {
  const [name, setName] = useState("test");

  const clickHandler = () => {
    setName("update");
  };
  return (
    <PaperProvider>
      <TopBar title="Search" />
      <View style={styles.container}>
        <SearchBar />
      </View>
      <View style={styles.container}>
        
        <View>
          <Text>Things to do: </Text>
          <Text>Filter beside search bar </Text>
          <Text>Side Hamborger bar </Text>
          <Text>Toggle button </Text>
          <Text>Cards </Text>
          <Text>Home page </Text>
          <Text>Notifications </Text>
          
        </View>    

        <StatusBar style="auto" />
      </View>

      <View style={styles.flexB}>
        <BottomBar />
      </View>
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
