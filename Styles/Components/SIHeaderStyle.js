import { StyleSheet } from "react-native-web";
import theme from "../theme";

export default StyleSheet.create({
  title: {
    ...theme.header,
    flex:2,  
    paddingHorizontal: 0,
    marginHorizontal:0,
    paddingTop: 50,
    marginBottom:0,
    paddingBottom:0,
    fontSize: 28,
    textAlign: "left",
  },
  title2: {
  ...theme.header,
  paddingHorizontal: 0,
  paddingBottom:20,
  marginTop:20,
  fontSize: 28,
  textAlign: "center",
  },
  subtitle: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: "center",
  },
  iconContainer: {
    paddingLeft: 20,
    paddingRight: 0,
    marginHorizontal: 0,
    flex: 1,
    paddingTop: 70,
  },
  });