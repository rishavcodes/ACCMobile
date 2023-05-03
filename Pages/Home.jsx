import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import BottomBar from "../Components/BottomBar";
import TopBar from "../Components/TopBar";

import StyledButton from "../Components/StyledButton";
import { TextInput } from "react-native-paper";
import landingStyles from "./pageStyles/landingStyles.js";
import { TouchableOpacity } from "react-native";
import theme from "./pageStyles/theme";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <ScrollView>
      <View style={theme.page}>
        <View style={{ paddingVertical: 10, alignItems: "center", backgroundColor: "#fff", flex: 1 }}>
          <View style={{ backgroundColor: "gray", height: 140, width: "100%", borderRadius: 10 }}></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            backgroundColor: "#fff",
          }}>
          <Text style={{ fontFamily: "msBold" }}>What's New?</Text>
          <TouchableOpacity>
            <Text>See all</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            paddingVertical: 10,
            backgroundColor: "#fff",
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
              paddingHorizontal: 10,
              backgroundColor: "#F1F1F1",
              borderRadius: 30,
            }}>
            <TouchableOpacity>
              <Text style={{ backgroundColor: "white", padding: 10, borderRadius: 30, color: "#F83E7D" }}>
                Matching
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ padding: 10, borderRadius: 30 }}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ padding: 10, borderRadius: 30 }}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ padding: 10, borderRadius: 30 }}>Blogs</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
            backgroundColor: "#fff",
            flex: 1,
            justifyContent: "space-between",
          }}>
          <View style={{ backgroundColor: "gray", height: 183, width: 171, borderRadius: 10 }}></View>
          <View style={{ backgroundColor: "gray", height: 183, width: 171, borderRadius: 10 }}></View>
        </View>
        <View style={{ paddingVertical: 10, alignItems: "center", backgroundColor: "#fff", flex: 1 }}>
          <View style={{ backgroundColor: "gray", height: 140, width: "100%", borderRadius: 10 }}></View>
        </View>
      </View>
    </ScrollView>
  );
}
