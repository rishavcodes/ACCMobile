import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import BottomBar from "../Components/BottomBar";
import TopBar from "../Components/TopBar";

import StyledButton from "../Components/StyledButton";
import { TextInput } from "react-native-paper";


export default function Blogs() {
  const [text, setText] = useState("");
  const theme = useTheme();
  return (
    <>
      <View style={theme.container}>
        <Text>Blogs Page</Text>
        <Text>To be Developed</Text>
      </View>
    </>
  );
}
