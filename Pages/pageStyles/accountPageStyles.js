import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container: {
        height: "85%",
    },
    scrollBody: {
        width: "80%",
        marginTop: 100,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    section: {
        marginTop: 10,
        marginBottom: 10,
    },
    header: {
        fontWeight: 700,
        fontSize: 24,
    },
    header2: {
        fontWeight: 700,
        fontSize: 20,
    },
    text: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 400,
        fontSize: 14,
        color: "#323232"
    },
    attributes: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imageHeader: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 10,
    },
    imageHeaderText: {
        fontWeight: 600,
        fontSize: 14,
    },
    mainImage: {
        height: 200,
        backgroundColor: 'grey',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    image: {
        flex: 1,
        maxWidth: '32%',
        borderRadius: 8,
        backgroundColor: 'grey',
    },
    tripleImage: {
        height: 80,
        marginTop: 5,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    matchButton: {
        height: 40,
        backgroundColor: '#F83E7D',
        borderRadius: 20,
    },
    match: {
        fontWeight: 600,
        fontSize: 16,
        height: '100%'
    },
    banner: {
        height: 150,
        backgroundColor: 'grey'
    },
    icon1: {
        position: 'absolute',
        top: 30,
        left: 35,
    },
    icon2: {
        position: 'absolute',
        top: 80,
        left: 35,
    },
    profilePic: {
        height: 92,
        width: 92,
        borderRadius: 48,
        backgroundColor: 'black',
        borderColor: '#F83E7D',
        borderWidth: 2,
    },
    profilePosition: {
        width: '100%',
        alignItems: 'center',
        marginTop: 104,
    },
    name: {
        fontWeight: 700,
        fontSize: 16,
        color: '#F83E7D',
    },
    occupation: {
        fontWeight: 600,
        fontSize: 14,
        color: '#323232'
    },
    info: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    priceRange: {
        marginTop: 30,
        alignItems: 'center'
    }
});
