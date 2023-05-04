import React, { useState } from "react";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { ImageBackground } from "react-native-web";
import { Button } from 'react-native-paper';
import demoIcon from "../assets/images/adaptive-icon.png";

// dummy variables to be replaced by redux API retrieval
const username = "OliveTree12"
const accountTypeRetrieved = "tenant"; 

export default function CustomDrawerContent(props) {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);

  const handleOnClick = (link, active) => {
    setActive(active);
    navigation.navigate(link);
  };

  const accounts = [
    {type: "tenant", colors: "#f83e7d", 
      label: [
        "My Account", 
        "Favourites", 
        "Payments", 
        "Settings", 
        "Help", 
        "Blogs"
      ], 
      onClick: [
        "myaccount", 
        "favourites", 
        "payments", 
        "settings", 
        "help", 
        "blogs"
      ]
    },
    {type: "propertyOwnerFemale", colors: "#0046F1", 
      label: [
        "My Account", 
        "Event",
        "Listings",
        "Payments", 
        "Settings", 
        "Help", 
        "Blogs"
      ], 
      onClick: [
        "myaccount", 
        "events", 
        "mylistings",
        "payments", 
        "settings", 
        "help", 
        "blogs"
      ]  
    },
    {type: "propertyOwner", colors: "#113170",
      label: [
        "My Account", 
        "Listings",
        "Payments", 
        "Settings", 
        "Help", 
      ], 
      onClick: [
        "myaccount", 
        "mylistings",
        "payments", 
        "settings", 
        "help", 
      ]  
    },
    {type: "others", colors: "#af1a4d",
      label: [
        "My Account",
        "Favourites",
        "Payments", 
        "Settings", 
        "Help", 
        "Blogs",
      ], 
      onClick: [
        "myaccount", 
        "favourites",
        "payments", 
        "settings", 
        "help",
        "blogs", 
      ]   
    }
  ];

  const accountInfo = accounts.filter(account => accountTypeRetrieved === account.type);
  const labels = accountInfo[0].label;
  const onClick = accountInfo[0].onClick;
  const accountColor = accountInfo[0].colors;

  return (
      <DrawerContentScrollView {...props}>
        <Image style={{marginTop: "-10%", width: 100, height: 100, alignSelf: "center"}}
                 source={demoIcon} />
        <Text style={{
          marginTop: "-10%",
          marginBottom: "7.5%", 
          fontSize: 20, 
          fontWeight: 700, 
          flex: 1, 
          textAlign: "center", 
          color: accountColor}}>{username}</Text>
        {labels.map((labelName, index) => (
          <View style={{borderColor: "#D3D3D3", borderBottomWidth: 2, paddingRight: "5%"}}>
            <DrawerItem
              labelStyle={{fontSize: 14}}
              style={{marginLeft: "12.5%"}}
              activeTintColor={accountColor}
              activeBackgroundColor={"FFFFFF"}
              label={labelName}
              onPress={() => handleOnClick(onClick[index], index + 1)}
              focused={active == index + 1}
            />
          </View>

        ))}
        <View style={{borderColor: "#D3D3D3", 
                      borderBottomWidth: 2, 
                      paddingRight: "5%"}}>
          {true && <DrawerItem 
                      labelStyle={{fontSize: 14}}
                      style={{marginLeft: "12.5%"}}
                      activeTintColor={accountColor}
                      activeBackgroundColor={"FFFFFF"}
                      label="Testing" 
                      onPress={() => handleOnClick("testing", labels.length)} 
                      focused={active == labels.length} 
          />}
        </View> 

        <View style={{
          flex: 1, 
          justifyContent: "flex-end", 
          alignItems: "center",
          marginTop: 12,
          marginBottom: 36
          }}>
          <Button
            textColor={accountColor}
            style={{
              textAlign: "center", 
              color: accountColor,
            }}
            labelStyle={{
              fontSize: 18,
              fontWeight: 600
            }}
          >Log Out</Button>
        </View>
      </DrawerContentScrollView>
  );
}
