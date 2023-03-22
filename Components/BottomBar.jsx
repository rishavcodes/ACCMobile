import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar, FAB, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BOTTOM_APPBAR_HEIGHT = 100;
const MEDIUM_FAB_HEIGHT = 56;

const BottomBar = () => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
        },
      ]}
      safeAreaInsets={{ bottom }}
      elevated>
      <Appbar.Action icon="home-variant-outline" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <FAB mode="elevated" size="medium" icon="plus" onPress={() => {}} style={styles.fab}/>
      <Appbar.Action icon="calendar" onPress={() => {}} />
      <Appbar.Action icon="bell-outline" onPress={() => {}} />
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
    gap: 20
  },
  fab: {
    backgroundColor: "white",
    borderRadius: 100
  }
});

export default BottomBar;
