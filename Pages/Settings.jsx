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
import { Switch } from "react-native-paper";
import settingStyles from "./pageStyles/settingStyles.js";


export default function Settings() {

  const [notifications, setNotifications] = useState([
    { title: "Property has been favourited", toggleStatus: false, id: 0, notificationType: "push" },
    { title: "Event registration", toggleStatus: false, id: 1, notificationType: "push" },
    { title: "New blog has been posted", toggleStatus: false, id: 2, notificationType: "push" },
    { title: "New event has been posted", toggleStatus: false, id: 3, notificationType: "push" },
    { title: "Visibility", toggleStatus: false, id: 4, notificationType: "privacy" },
    { title: "Save login info", toggleStatus: false, id: 5, notificationType: "privacy" },
  ]);

  const toggleSwitch = (id) => {
    const newNotifications = [...notifications];
    newNotifications[id].toggleStatus = !newNotifications[id].toggleStatus;
    setNotifications(newNotifications);
  }

  return (
    <>
      <View style={landingStyles.container}>
        <View style={{ width: "115%", paddingHorizontal: 100, paddingVertical: 300, backgroundColor: "white" }}>
          <View style={{ flexDirection: "row", marginTop: "-70%" }}>
            <View style={settingStyles.borderView}>
              <Text style={settingStyles.subHeader}>Account</Text>
            </View>
            <Text style={settingStyles.subHeader}> Settings</Text>
          </View>
          
          <Text style={settingStyles.title}>Push Notifications</Text>
            
          <View style={settingStyles.entryView}>
            <Text style={settingStyles.entryText}>{notifications[0].title}</Text>
            <Switch color={"#f83e7d"} style={settingStyles.switch} value={notifications[0].toggleStatus} onValueChange={() => toggleSwitch(0)}></Switch>
          </View>
          
          <View style={settingStyles.entryView}>
            <Text style={settingStyles.entryText}>{notifications[1].title}</Text>
            <Switch color={"#f83e7d"} style={settingStyles.switch} value={notifications[1].toggleStatus} onValueChange={() => toggleSwitch(1)}></Switch>
          </View>            

          <View style={settingStyles.entryView}>
            <Text style={settingStyles.entryText}>{notifications[2].title}</Text>
            <Switch color={"#f83e7d"} style={settingStyles.switch} value={notifications[2].toggleStatus} onValueChange={() => toggleSwitch(2)}></Switch>
          </View>  

          <View style={settingStyles.entryView}>
            <Text style={settingStyles.entryText}>{notifications[3].title}</Text>
            <Switch color={"#f83e7d"} style={settingStyles.switch} value={notifications[3].toggleStatus} onValueChange={() => toggleSwitch(3)}></Switch>
          </View>     

          <Text style={settingStyles.title}>Privacy and Security</Text>      

          <View style={settingStyles.entryView}>
            <Text style={settingStyles.entryText}>{notifications[4].title}</Text>
            <Switch color={"#f83e7d"} style={settingStyles.switch} value={notifications[4].toggleStatus} onValueChange={() => toggleSwitch(4)}></Switch>
          </View>   

          <View style={settingStyles.entryView}>
            <Text style={settingStyles.entryText}>{notifications[5].title}</Text>
            <Switch color={"#f83e7d"} style={settingStyles.switch} value={notifications[5].toggleStatus} onValueChange={() => toggleSwitch(5)}></Switch>
          </View>   

        </View>
      </View>
    </>





  )};