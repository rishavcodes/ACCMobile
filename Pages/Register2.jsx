import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, ImageBackground } from "react-native";
import { useTheme,Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { IconButton } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

import loginStyles from "./pageStyles/loginStyles";
import { ToggleButton } from "react-native-paper";

export default function Register2() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = React.useState("left");

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleOnClick = (e) => {
    if (text !== "hi") {
      setText("hi");
    } else {
      setText("bye");
    }
  };

  return (
    <>
      <View style={{ paddingHorizontal: 20, paddingTop: 20, backgroundColor: "white" }}>
        <IconButton icon={() => <Ionicons name="arrow-back" size={24} />} onPress={handleBackPress} />
      </View>

      <View style={theme.page}>
        <View style={{ backgroundColor: theme.white }}>
          <Text style={{ paddingHorizontal: 20, paddingBottom: 20, paddingTop: 20, fontWeight: "bold", fontSize: 32 }}>
            Register
          </Text>
          <Text style={{ paddingHorizontal: 20, paddingBottom: 20, paddingTop: 20, fontSize: 24 }}>Select Role</Text>
        </View>

        <View style={loginStyles.container}>
          <ToggleButton.Group onValueChange={(value) => setValue(value)} value={value}>
            <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start", width: "100%" }}>
              <View style={{ width: "50%" }}>
                <ToggleButton
                  icon="format-align-left"
                  value="Tenant"
                  style={{ width: "100%", height: 200 }}
                  size={100}
                />
              </View>
              <View style={{ width: "50%" }}>
                <ToggleButton
                  icon="format-align-left"
                  value="Woman Homeowner"
                  style={{ width: "100%", height: 200 }}
                  size={100}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start", width: "100%" }}>
              <View style={{ width: "50%" }}>
                <ToggleButton
                  icon="format-align-left"
                  value="Property Owner"
                  style={{ width: "100%", height: 200 }}
                  size={100}
                />
              </View>
              <View style={{ width: "50%" }}>
                <ToggleButton
                  icon="format-align-left"
                  value="Others"
                  style={{ width: "100%", height: 200 }}
                  size={100}
                />
              </View>
            </View>
          </ToggleButton.Group>
          <Text>I am looking to rent a shared accomodation</Text>
          <View style={{ paddingVertical: 20 }}>
            <StyledButton variant="pinkBtn" text="Next" link="register3"/>
          </View>
        </View>
      </View>
    </>
  );
}
