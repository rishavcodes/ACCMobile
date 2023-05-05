import { StyleSheet } from "react-native-web";


export default StyleSheet.create({
  subHeader: {
    fontWeight: 600,
    fontSize: 22,
  },

  borderView: {
    borderBottomWidth: 3,
    borderBottomColor: "#f83e7d", 
    marginBottom: 20,
    marginLeft: 5,
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
    paddingVertical: "5.5%"
  },

  switch: {
    marginLeft: 30,
    transform: [{ scaleX: 1.25 }, { scaleY: 1.25 }],
    color: "#f83e7d"
  },

})