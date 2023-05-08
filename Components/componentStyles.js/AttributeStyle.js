import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container: {
        width: 100,
        paddingLeft: 5,
        paddingRight: 5,
        height: 35,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,
        marginBottom: 8,
    },
    pink: {
        backgroundColor: '#FED8E5',
    },
    blue: {
        backgroundColor: '#CCDAFC',
    },
    pinkCircle: {
        backgroundColor: '#F83E7D',
    },
    blueCircle: {
        backgroundColor: '#113170',
    },
    circle: {
        borderRadius: 4,
        height: 8,
        width: 8,
        marginRight: 4,
    },
    text: {
        fontWeight: 600,
        fontSize: 14,
    }
});