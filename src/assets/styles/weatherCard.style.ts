import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        minWidth: '80%',
        backgroundColor: '#0984e3',
        borderRadius: 15,
        padding: 10,
        marginVertical: 20,
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    secondRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    bigText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#fff'
    },
    details: {
        alignSelf: 'flex-end',
        paddingTop: 10
    }
});