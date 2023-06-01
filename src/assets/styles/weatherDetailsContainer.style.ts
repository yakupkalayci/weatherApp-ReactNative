// Import React Native
import { StyleSheet } from "react-native";

// Import Themes
import { darkMode } from "../../common/theme/darkMode";
import { lightMode } from "../../common/theme/lightMode";

// Import Types
import { Themes } from "../../common/theme/type";

export const customStyles = (theme:Themes) => StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: theme === 'dark' ? darkMode.primaryText : lightMode.primaryText
    },
    description: {
        alignItems: 'center',
        marginVertical: 30
    },
    descriptionImage: {
        width: 200,
        height: 100,
        marginBottom: 17
    },
    details: {
        backgroundColor: theme === 'dark' ? darkMode.backgroundColor : lightMode.backgroundColor,
        borderRadius: 10,
        marginHorizontal: 40,
        padding: 20
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'blue',
        borderBottomWidth: 0.3,
        padding: 15
    },
    detailText: {
        color: theme === 'dark' ? darkMode.secondaryText : lightMode.primaryText
    },
    sectionHeading: {
        marginBottom: 20
    },
    timely: {
        backgroundColor: theme === 'dark' ? darkMode.backgroundColor : lightMode.backgroundColor,
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 10,
        padding: 20,
    },
    cardContainer: {
        alignItems: 'center', 
        backgroundColor: theme === 'dark' ? darkMode.timelyCardBackgroundColor : lightMode.timelyCardBackgroundColor,
        marginRight: 15, 
        borderRadius: 30, 
        paddingVertical: 10
    },
    cardImage: {
        width: 100, 
        height: 50, 
        marginVertical: 5
    }
});