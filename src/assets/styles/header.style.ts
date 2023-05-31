import { StyleSheet } from "react-native";
import { BASE_COLORS } from "../../common/constants/baseColors";

export default StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    heading: {
        fontWeight: "900",
        fontSize: 50,
        color: BASE_COLORS.black
    },
    subHeader: {
        paddingTop: 10,
        fontSize: 18,
        color: BASE_COLORS.black
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    routeName: {
        fontStyle: 'italic',
        color: BASE_COLORS.black
    }
})