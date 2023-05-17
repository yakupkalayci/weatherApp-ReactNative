import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#000',
    },
    menuItemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuItem: {
        color: '#fff',
        fontSize: 15,
        paddingTop: 5,
        paddingLeft: 3
    }
});