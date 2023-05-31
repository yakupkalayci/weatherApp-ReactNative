// Import React
import { View, Text, Pressable } from 'react-native';

// Import React Navigation
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { footerMenu } from '../../router/footerMenu';

// Import Utils
import { translate } from '../../common/utils/translate';

// Import Vector Icons
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

// styles
import styles from '../../assets/styles/footerMenu.style';

function Footer(): JSX.Element {
    // variables
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={[{ paddingBottom: insets.bottom }, styles.container]}>
            {
                footerMenu.map(item => (
                    <Pressable
                        key={item.key}
                        style={styles.menuItemContainer}
                        onPress={() => { navigation.navigate(item.navigateKey) }}
                    >
                        {
                            item.navigateKey === 'home' ? <AntDesignIcon name={item.navigateKey} size={25} color='#fff' />
                                : item.navigateKey === 'cities' ? <MaterialIcon name='location-city' size={25} color='#fff' />
                                    : item.navigateKey === 'settings' ? <FeatherIcon name={item.navigateKey} size={25} color='#fff' />
                                        : item.navigateKey === 'location' ? <MaterialIcon name='location-on' size={25} color='#fff' />
                                        : null
                        }
                        <Text style={route.name === item.navigateKey ? [styles.menuItem, { fontWeight: 'bold' }] : styles.menuItem}>{translate(`MENU.${item.navigateKey.toUpperCase()}`)}</Text>
                    </Pressable>
                ))
            }
        </View>
    )
}

export default Footer;