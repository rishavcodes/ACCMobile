import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    card: {
        borderRadius: 50,
        width: 344,
        height: 421,
        borderWidth: 3,
        borderColor: '#F83E7D',
        backgroundColor: 'white'
      },
      iconContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
      avatarContainer: {
        alignItems: 'center',
        marginTop: -30,
        marginBottom: 10,
      },
      title: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
      accTitle: {
        color: '#F83E7D',
        textAlign: 'center',
      },
      grid: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
      },
      gridItem: {
        textAlign: 'center',
        flex: 5,
      },
      separator: {
        textAlign: 'center',
        flex: 2,
      },
      buttonContainer: {
        alignItems: 'center',
      },
      pinkButton: {
        backgroundColor: '#F83E7D',
      },
});
