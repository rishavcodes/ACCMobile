import { StyleSheet } from "react-native-web";
import theme from "../theme";

export default StyleSheet.create({
    cardContainer: {
      paddingVertical: 40,
    },
    container: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 20,
      backgroundColor: "white",
      paddingBottom: theme.bottomBarHeight,
    },
    searchBar: {
      paddingHorizontal: 20,
    },
    flexB: {
      flex: 1,
    },
    header: {
      color: "#fff",
      marginTop: 30,
      fontWeight: 700,
      fontSize: 36,
      textAlign: "center",
    },
    header2: {
      marginTop: 20,
      fontWeight: 400,
      fontSize: 20,
      textAlign: "center",
    },
    top: {
      color: "#fff",
      marginTop: 100,
      fontWeight: "bold",
    },
    bottom: {
      flex: 1,
      marginBottom: 200,
    },
    boldText: {
      fontWeight: "bold",
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
    },
  });
  