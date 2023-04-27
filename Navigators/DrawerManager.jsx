import React, { useState } from "react";
import Landing from "../Pages/Home";
import Testing from "../Pages/Testing";
import OnBoarding from "../Pages/OnBoarding";
import SignIn from "../Pages/SignIn";
import Login from "../Pages/Login";
import ForgetPassword from "../Pages/ForgotPassword";
import Register from "../Pages/Register";
import Register2 from "../Pages/Register2";
import Register3 from "../Pages/Register3";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabManager from "./TabManager";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../Pages/Search";
import CustomDrawerContent from "../Components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerManager() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} /> } screenOptions={{drawerPosition:"right"}}>
        <Drawer.Screen name="tabmanager" component={TabManager} options={{ title: "ACC" }} />
      </Drawer.Navigator>
    </SafeAreaView>
  );
}
