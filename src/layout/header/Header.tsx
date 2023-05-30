// Import React
import { View, Text } from 'react-native';

// Import React Navigation
import { useRoute } from '@react-navigation/native';

// styles
import styles from '../../assets/styles/header.style';

function Header(): JSX.Element {

    // variables
    const route = useRoute();

    return (
        <View style={styles.header}>
            <View style={styles.leftHeader}>
                <Text style={styles.heading}>W</Text>
                <Text style={styles.subHeader}>eather</Text>
            </View>
            <View>
                <Text style={styles.routeName}>{route.name}</Text>
            </View>
        </View>
    )
}

export default Header;