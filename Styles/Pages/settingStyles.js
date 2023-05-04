import { StyleSheet } from "react-native-web";
import theme from "./theme";

export default StyleSheet.create({
  subHeader: {
    marginTop: "-40%",
    fontWeight: 600,
    fontSize: 22,
  },

  border: {
    borderBottomWidth: 3,
    borderBottomColor: "#af1a4d", 
    width: 75,
    marginTop: -20,
    marginBottom: 20,
    marginLeft: 5
  },

  title: {
    paddingTop: "5%",
    paddingBottom: "5%", 
    textAlign: "center", 
    fontSize: 14,
    fontWeight: 500
  },

  entryView: {
    flexDirection: "row",
    alignItems: "center",
  },

  entryText: {
    flex: 1,
    fontWeight: 500,
    fontSize: 12,
    fontWeight: 500,
    paddingVertical: "2.5%"
  },

  switch: {
    marginLeft: 30,
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    color: "#f83e7d"
  },

})