import {View, Text, Pressable } from 'react-native';

import styles from '../../assets/styles/header.style';

function Header():JSX.Element {
    return (
        <View style={styles.header}>
            <Text style={styles.heading}>W</Text>
            <Text style={styles.subHeader}>eather</Text>
        </View>
    )
}

export default Header;