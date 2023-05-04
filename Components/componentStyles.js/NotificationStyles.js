import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    card: {
        width: "95%",
        height: 100,
        padding: 20,
        borderColor: 'rgba(17, 49, 112, 0.34)',
        borderWidth: 1,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        color: "#000000",
        overflow: 'hidden',
        backgroundColor:"white"
    },
    lines: {
        lineHeight: 19
    },
    textContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    text: {
        fontWeight: 600,
        fontSize: 14,
    },
    linkText: {
        fontWeight: 600,
        fontSize: 14,
        color: '#F83E7D',
    },
    notifications: {
        marginBottom: 100,
        paddingTop: 36,
        flex: 1,
    }
});