import { StyleSheet } from "react-native-web";
import theme from "../theme";

export default StyleSheet.create({
    accordionButton: {
      flexDirection: "row",
      borderBottomWidth: 2,
      borderStyle: "solid",
      width: "100%",
    },
    accordionText: {
      fontSize: 16,
      paddingHorizontal: 15,
      flex: 1,
      marginTop: 15,
    },
    text:{
      borderBottomWidth: 0,
      color: "black",
      fontSize: 16,
    },
    accordionBtnIcon: { 
      flex: 1, 
      alignItems: "flex-end" 
    },
  });
