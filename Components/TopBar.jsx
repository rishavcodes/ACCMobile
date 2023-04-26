import React, { useState } from "react";
import { Appbar, Drawer } from "react-native-paper";
import { StyleSheet, View } from "react-native";

function TopBar(props) {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const openDrawer = () => {
    setDrawerVisible(true);
    console.log("drawer should be opened")
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <View>
      <Appbar.Header style={styles.top}>
        <Appbar.Content title={props.title} />
        <Appbar.Action icon="menu" onPress={openDrawer} />
        <Appbar.Action icon="account" onPress={() => {}} />
      </Appbar.Header>
      <Drawer.Section
        style={{ position: "absolute", right: 0, top: 0, zIndex: 1, backgroundColor: "white" }}
        visible={drawerVisible}
        onDismiss={closeDrawer}>
        <Drawer.Item label="Home" onPress={closeDrawer} />
        <Drawer.Item label="Settings" onPress={closeDrawer} />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    height: 100,
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default TopBar;
