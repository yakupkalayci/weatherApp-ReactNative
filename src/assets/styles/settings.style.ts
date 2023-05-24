import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        marginTop: 20,
        height: Dimensions.get('window').height * 0.55,
        alignItems: 'center',
    },
    buttons: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    lang: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width / 2.5,
    }
});