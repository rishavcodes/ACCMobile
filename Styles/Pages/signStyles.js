import { StyleSheet } from "react-native-web";
import theme from "../theme";
import { Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        alignItems: "center",
        paddingHorizontal: 20,
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
        fontFamily: 'msBold'
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
    subheader: { 
        textAlign:"center",
        paddingHorizontal: 20, 
        paddingBottom: 20, 
        paddingTop: 20, 
        fontSize: 24, 
        fontWeight: "bold"},
    subheader2: { 
        paddingHorizontal: 10, 
        paddingBottom: 20, 
        paddingTop: 20, 
        fontWeight: "bold", 
        fontSize: 32 },

    footer: {
        position: "absolute",
        bottom:10,
        width:"100%",
        paddingHorizontal: 20,
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