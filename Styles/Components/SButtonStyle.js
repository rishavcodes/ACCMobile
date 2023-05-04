import { StyleSheet } from "react-native-web";
import theme from "../theme";

export default StyleSheet.create({
    contained: {
      minWidth: 200,
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#F83E7D',
    },
    containedText: {
      color: "#fff", 
      fontSize: 18,
      fontWeight: 400,
      fontSize: 20,
      fontFamily: "msSemiBold",
    },
    plainText: {
      color: "#fff", 
      fontSize: 18,
      fontWeight: 400,
      fontSize: 20,
      borderColor:"white",
      borderBottomWidth:1,
      borderStyle:"solid"
    },
  });