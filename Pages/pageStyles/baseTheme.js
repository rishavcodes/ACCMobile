import { DefaultTheme} from "react-native-paper";

export default {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F83E7D",
    accent: "#f1c40f",
    tenant: "#F83E7D",
    po: "#113170",
    other: "#C5265C",
    ho: "#0045F1"
  },
  fontSizes: {
    h1: 30,
  },
  fonts: {
    ...DefaultTheme.fonts,
    h1: {
      fontFamily: "msLight",
    },
    h2: {
      fontFamily: "Montserrat-Regular",
      fontWeight: "normal",
    },
    bold: "msBold",
    regular: "msRegular",
    sBold: "msSemiBold",
    light: "msLight",
    medium: "msMedium",
    thin: "msThin",
  },
  page: {
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flex: 1,
    paddingBottom: 100,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  textField: {
    backgroundColor: "#FFF",
    width: "100%",
  },
  

  bottomBarHeight: 100,
};
