import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Pages/Home";
import Testing from "../Pages/Testing";
import BottomBar from "../Components/BottomBar";
import Search from "../Pages/Search";
import MyAccount from "../Pages/MyAccount";
import Favourites from "../Pages/Favourites";
import Payments from "../Pages/Payments";
import Events from "../Pages/Events";
import Settings from "../Pages/Settings";
import Help from "../Pages/Help";
import MyListings from "../Pages/MyListings";
import Blogs from "../Pages/Blogs";
import Notifications from "../Pages/Notifications";

const Tab = createBottomTabNavigator();

export default function TabManager() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomBar />}>
      {/*Home screen needs to be first! */}
      <Tab.Screen name="home" component={Home} />

      {/*Every page in related to Account */}
      <Tab.Screen name="myaccount" component={MyAccount} />
      <Tab.Screen name="favourites" component={Favourites} />
      <Tab.Screen name="payments" component={Payments} />
      <Tab.Screen name="events" component={Events} />
      <Tab.Screen name="mylistings" component={MyListings} />
      <Tab.Screen name="settings" component={Settings} />
      <Tab.Screen name="help" component={Help} />
      <Tab.Screen name="blogs" component={Blogs} />

      <Tab.Screen name="search" component={Search} />
      <Tab.Screen name="notifications" component={Notifications} />
      <Tab.Screen name="testing" component={Testing} />

    </Tab.Navigator>
  );
}
