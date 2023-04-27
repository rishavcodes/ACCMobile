import React, { useState } from "react";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
export default function CustomDrawerContent(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={() => navigation.navigate("home")} />
      <DrawerItem label="My Account" onPress={() => navigation.navigate("myaccount")} />
      <DrawerItem label="Favourites" onPress={() => navigation.navigate("favourites")} />
      <DrawerItem label="Settings" onPress={() => navigation.navigate("settings")} />
      <DrawerItem label="Help" onPress={() => navigation.navigate("help")} />
      <DrawerItem label="Blogs" onPress={() => navigation.navigate("blogs")} />
      {true && <DrawerItem label="Testing" onPress={() => navigation.navigate("testing")} />}
    </DrawerContentScrollView>
  );
}
