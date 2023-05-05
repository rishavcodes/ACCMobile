import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import BottomBar from "../Components/BottomBar";
import TopBar from "../Components/TopBar";

import StyledButton from "../Components/StyledButton";
import { TextInput } from "react-native-paper";


export default function RentalListingForm() {
  const [text, setText] = useState("");

  return (
    <>
      <View style={landingStyles.container}>
        <Text>RentalListingForm Page</Text>
        <Text>To be Developed</Text>
      </View>
    </>
  );
}
