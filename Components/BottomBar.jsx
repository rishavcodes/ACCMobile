import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar, FAB, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import theme from "../Pages/pageStyles/theme";

const BottomBar = () => {
  /**
   * BottomBar is a custom bottom navigation component, that swtiches the pages nested within the tab manager. 
   * -------------------------------------------------------------------------------------------------------------
   * Note:
   * The bottom bar should be conditionally rendered based on the account types,
   * different account types have different buttom navigations. 
   */
  const navigation = useNavigation();

  return (
    <Appbar style={[styles.bottom]} elevated>
      <Appbar.Action icon="home-variant-outline" onPress={() => navigation.navigate("home")} />
      <Appbar.Action icon="magnify" onPress={() => navigation.navigate("search")} />
      <FAB mode="elevated" size="medium" icon="plus" onPress={() => {}} style={styles.fab} />
      <Appbar.Action icon="calendar" onPress={() => navigation.navigate("events")} />
      <Appbar.Action icon="bell-outline" onPress={() => navigation.navigate("notifications")} />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    gap: 20,
    height: theme.bottomBarHeight
  },
  fab: {
    backgroundColor: "white",
    borderRadius: 100,
  },
});

export default BottomBar;
