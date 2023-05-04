import { StyleSheet } from "react-native-web";
import theme from "../theme";

export default StyleSheet.create({
  container: {
    backgroundColor: theme.white,
    alignItems: "center",
    flex: 1,
  },
  searchBar: {
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  flexB: {
    flex: 1,
  },
  bottom: {
    marginBottom: 200,
  },
  top: {
    marginTop: 100,
    alignItems: "center",
    width: "100%",
  },
  boldText: {
    fontWeight: "bold",
  },
  header: {
    color: "#fff",
    marginTop: 30,
    fontWeight: 700,
    fontSize: 36,
    textAlign: "center",
    fontFamily: "msBold",
  },
  header2: {
    marginTop: 20,
    fontWeight: 400,
    fontSize: 20,
    textAlign: "center",
  },
  header3: {
    marginTop: 20,
    fontWeight: 400,
    fontSize: 20,
  },
  subheader: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingTop: 20,
    fontWeight: "bold",
    fontSize: 32,
  },
  textButton: {
    color: "#0045F1",
    textDecorationLine: "underline",
    borderWidth: 0,
  },
});
