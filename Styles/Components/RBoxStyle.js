import { StyleSheet } from "react-native-web";
import theme from "../theme";

export default StyleSheet.create({
  unselected: {
    backgroundColor: "white",
    marginHorizontal: 10,
    width: "50%",
    paddingHorizontal: 5,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  selected: {
    backgroundColor: "white",
    marginHorizontal: 10,
    width: "50%",
    paddingHorizontal: 5,
    marginBottom: 10,
    borderStyle: "solid",
    borderWidth: 2,
  },
  iconContainer: {
    alignItems: "center",
    padding: 0,
    margin: 0,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
