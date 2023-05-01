import { StyleSheet } from "react-native-web";
import theme from "./theme";

export default StyleSheet.create({

  slide1: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide2: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide3: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text:{
    textAlign: "center",
    fontFamily: theme.fonts.regular,
    color: "black",
    marginBottom: 30,
  },
  headerTxt: {
    fontSize: theme.fontSizes.h1,
    fontFamily: theme.fonts.bold,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  blue:{
    color: theme.Colors.blue,
  },
  pink:{
    color: theme.Colors.pink,
  },
  imgWrap:{
    marginBottom: 50,
  }
});
