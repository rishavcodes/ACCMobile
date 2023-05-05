import { StyleSheet } from "react-native-web";
import baseTheme from "./baseTheme"
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
  text: {
    textAlign: "center",
    fontFamily: baseTheme.fonts.regular,
    color: "black",
    marginBottom: 90,
  },
  headerTxt: {
    fontSize: baseTheme.fontSizes.h1,
    fontFamily: baseTheme.fonts.bold,
    marginBottom: 30,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  imgWrap: {
    marginBottom: 30,
  },
  // Onboarding Page Style
  onboardingHeader: {
    fontFamily: baseTheme.fonts.bold,
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: 48,
    marginBottom: 30,
    letterSpacing: 1.5,
    lineHeight: 50,
  },
  onboardingText: {
    fontFamily: baseTheme.fonts.medium,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    color: "black",
    lineHeight: 23,
    textAlign: "center",
  },
  checkmark: {
    // marginTop: 30,
    // position:'absol  ute', bottom: 0
  },
});
