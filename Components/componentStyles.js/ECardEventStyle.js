import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
  card: {
    borderRadius: 25,
    width: 367,
    backgroundColor: "white",
  },
  cardCover: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  cardContent: {
    marginHorizontal: 15
  },
  buttonContainer: {
    alignItems: "flex-end",
    paddingRight: 20,
    marginTop: -170,
    marginBottom: 140,
  },
  pinkButton: {
    backgroundColor: "#F83E7D",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontWeight: "bold",
    color: "#F83E7D",
  },
  boldText: {
    fontWeight: "bold",
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gridItem: {
    textAlign: "center",
    fontSize: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  verified: {
    flexDirection: "row",
    alignItems: "center",
  },
  verifiedText: {
    color: "#A3A3A3",
  },
  iconButton: {
    marginRight: 10,
    backgroundColor: "white",
  },
});
