import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    mapContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        borderRadius: 10,
        width: Dimensions.get('window').width / 1.05,
        height: Dimensions.get('window').height / 1.65
    },
    infoText: {
        alignSelf: 'flex-start',
        paddingLeft: 10,
        marginVertical: 10,
        fontStyle: 'italic'
    }
})