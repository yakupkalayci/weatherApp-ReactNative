import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold'
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
        backgroundColor: '#f7f7f7',
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
    sectionHeading: {
        marginBottom: 20
    },
    timely: {
        backgroundColor: '#f7f7f7',
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 10,
        padding: 20,
    },
    cardContainer: {
        alignItems: 'center', 
        backgroundColor: 'rgb(63, 209, 153)', 
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