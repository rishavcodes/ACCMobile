import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: '90%',
        backgroundColor: '#FFFFFF',
        paddingTop: 25,
    },
    pageHeader: {
        width: '80%', 
    },
    formBody: {
        width: "80%",
        marginTop: 60,    
    },
    userTitle: {
        fontWeight: 700,
        fontSize: 24,
        color: '#F43F60',
        marginRight: 'auto',
    },
    scroll: {
        alignItems: 'center',
    },
    dropdownHeader: {
        marginBottom: 5,
        fontWeight: 700,
        fontSize: 20,
        width: '100%',
        backgroundColor: "#FFFFFF",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 0,
    },
    disclaimer: {
        fontWeight: 600,
        fontSize: 12,
        color: 'rgba(115, 115, 115, 0.98)',
        marginBottom: 20
    },
    checkboxesContainer: {
        marginTop: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        width: '50%',
        fontWeight: 400,
        fontSize: 14,
    },
    checkboxesRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    checkbox: {
        marginRight: 4,
        backgroundColor: 'black',
    },
    button: {
        width: 180,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#F9568D',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    lastButton: {
        marginBottom: 100
    },
    buttonText: {
        fontWeight: 700,
        fontSize: 16,
        color: '#FFFFFF',
    },
    bannerUpload: {
        marginTop: 20,
        backgroundColor: '#F4F4F4',
        height: 80,
        width: '100%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileUpload: {
        backgroundColor: '#F4F4F4',
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        top: -50
    },
    detailImageUploads: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainImageUpload: {
        flex: 0,
        height: 180,
        borderRadius: 25,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tripleImage: {
        marginTop: 10,
        width: '80%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageUpload: {
        width: "32%",
        height: "100%",
        borderRadius: 15,
        backgroundColor: '#F4F4F4',
    },
    detailsFormField: {
        backgroundColor: '#F4F4F4',
        borderRadius: 10,
        marginBottom: 12,
        padding: 10,
        height: 50
    },
    descriptionsFormField: {
        backgroundColor: '#F4F4F4',
        borderRadius: 10,
        marginBottom: 10,
        height: 225,
        textAlign: 'left',
        padding: 15,
        paddingTop: 15
    },
    descriptionsTitle: {
        fontWeight: 700,
        fontSize: 20,
    },
    priceRange: {
        marginTop: 30,
        alignItems: 'center'
    }
});