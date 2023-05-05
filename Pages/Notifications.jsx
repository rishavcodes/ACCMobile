import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useTheme,Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";
import BottomBar from "../Components/BottomBar";
import TopBar from "../Components/TopBar";
import StyledButton from "../Components/StyledButton";
import { TextInput } from "react-native-paper";

import Notification from "../Components/Notification";
import NotificationStyles from "../Components/componentStyles.js/NotificationStyles";
import { Searchbar } from 'react-native-paper';

export default function Notifications() {
  /**
   * The Page that displays all notifications of the user.
   * ------------------------------------------------------------------------------
   * Note:
   * Search bar should be able to search for all existing notifications
   * Currrently there is no way to delete notifications
   */
  const [text, setText] = useState("");
  const theme = useTheme()

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
    <View style={{backgroundColor:"#fff",paddingBottom:10,paddingLeft:10,paddingRight:60}}>
    <Searchbar 
      style={{backgroundColor:"#F1F1F1",borderRadius:99}}
      placeholder="Search"
      onChangeText={(text)=>setText(text)}
      value={text}
    />
    </View>
      <View style={theme.container}>
        <ScrollView style={NotificationStyles.notifications}>
        {notifications.map(notification => 
        <>
            {notification.text.includes(text)&&<Notification
              text={notification.text}
              linkText={notification.linkText}
              link={notification.link}
            />}</>)}
        </ScrollView>
      </View>
    </>
  );
}