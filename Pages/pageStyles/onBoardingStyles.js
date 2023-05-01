import { StyleSheet } from "react-native-web";
import theme from "./theme";

export default StyleSheet.create({
  activeDot: {
    backgroundColor: "#F83E7D",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
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
    color: theme.textColors.blue,
  },
  pink:{
    color: theme.textColors.pink,
  },
  imgWrap:{
    marginBottom: 50,
  }
});
