import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from "react-native";

const TopBar = (props) => (
  <Appbar.Header style={styles.top}>
    <Appbar.Content title={props.title}/>
    <Appbar.Action icon="menu" onPress={() => {}} />
    <Appbar.Action icon="account" onPress={() => {}} />
  </Appbar.Header>
);

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