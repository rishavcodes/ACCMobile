import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import BottomBar from "../Components/BottomBar";
import TopBar from "../Components/TopBar";
import SearchBar from "../Components/SearchBar";
import StyledButton from "../Components/StyledButton";
import { TextInput } from "react-native-paper";
import landingStyles from "../Styles/Pages/landingStyles.js";
import Notification from "../Components/Notification";
import NotificationStyles from "../Styles/Components/NotificationStyles";

export default function Notifications() {
  const [text, setText] = useState("");

  const notifications = [
    {text: "Aisha Comfortable Coliving just posted a new blog!", linkText: "Check it out here", link: ""},
    {text: "Jessica is interested in matching with you for \"Spacious 1 Bedroom Apartment Available for...\"", linkText: "", link: ""},
    {text: "Aisha Comfortable Coliving just posted a new community event!", linkText: "Get the details", link: ""},
    {text: "Aisha Comfortable Coliving just posted a new community event!", linkText: "Get the details", link: ""},
    {text: "Aisha Comfortable Coliving just posted a new community event!", linkText: "Get the details", link: ""},
    {text: "Aisha Comfortable Coliving just posted a new community event!", linkText: "Get the details", link: ""},
    {text: "Aisha Comfortable Coliving just posted a new community event!", linkText: "Get the details", link: ""},
  ]

  return (
    <>
      <SearchBar/>
      <View style={landingStyles.container}>
        <ScrollView style={NotificationStyles.notifications}>
          {notifications.map(notification => 
            <Notification
              text={notification.text}
              linkText={notification.linkText}
              link={notification.link}
            />)}
        </ScrollView>
      </View>
    </>
  );
}