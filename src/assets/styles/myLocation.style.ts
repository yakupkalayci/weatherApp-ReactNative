import { StyleSheet } from "react-native";
import { BASE_COLORS } from "../../common/constants/baseColors";

export default StyleSheet.create({
    container: {
        marginBottom: 150
    },
    headerLink: {
        alignSelf: 'flex-end',
        paddingRight: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: BASE_COLORS.black
    }
});