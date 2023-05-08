import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    label: {
        color: '#323232',
        height: 20,
        width: 45,
        position: 'absolute',
        bottom: 50,
    },
    trackStyle: {
        backgroundColor: '#F83E7D',
    },
    outerTrackStyle: {
        backgroundColor: '#D9D9D9',
        borderSize: 0,
    },
    bottomBar: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: "100%",
    },
    number: {
        fontWeight: 600,
        fontSize: 14,
    }
});