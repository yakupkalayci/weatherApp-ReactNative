import { StyleSheet } from "react-native";
import { BASE_COLORS } from "../../common/constants/baseColors";

export default StyleSheet.create({
    container: {
        minWidth: '80%',
        backgroundColor: '#0984e3',
        borderRadius: 15,
        padding: 10,
        marginVertical: 20,
        shadowOpacity: 0.5,
        shadowColor: 'green',
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    secondRow: {
        marginTop: 20,
    },
    detailRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginBottom: 5
    },
    bigText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: BASE_COLORS.black
    },
    details: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        paddingTop: 10,
        alignItems: 'center',
    },
    cityNameContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    cityName: {
        color: BASE_COLORS.black,
        paddingRight: 10
    },
    weatherContainer: {
        alignItems: 'center', 
        marginVertical: 10
    },
    icon: {
        width: 100, 
        height: 50
    },
    linkText: {
        marginRight: 10,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    errorMessage: {
        color: BASE_COLORS.black
    }
});