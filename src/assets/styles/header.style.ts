// Import React Native
import { StyleSheet } from "react-native";

// Import Themes
import { darkMode } from "../../common/theme/darkMode";
import { lightMode } from "../../common/theme/lightMode";

// Import Types
import { Themes } from "../../common/theme/type";

export const customStyles = (theme:Themes) => StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    heading: {
        fontWeight: "900",
        fontSize: 50,
        color: theme === 'dark' ? darkMode.primaryText : lightMode.primaryText
    },
    subHeader: {
        paddingTop: 10,
        fontSize: 18,
        color: theme === 'dark' ? darkMode.primaryText : lightMode.primaryText
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    routeName: {
        fontStyle: 'italic',
        color: theme === 'dark' ? darkMode.primaryText : lightMode.primaryText
    }
})