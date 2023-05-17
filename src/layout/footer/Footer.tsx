import { View, Text, Pressable } from 'react-native';
import { footerMenu } from '../../router/footerMenu';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../../assets/styles/footerMenu.style';

function Footer(): JSX.Element {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={[{ paddingBottom: insets.bottom }, styles.container]}>
            {
                footerMenu.map(item => (
                    <Pressable
                        style={styles.menuItemContainer}
                        onPress={() => { navigation.navigate(item.navigateKey) }}
                    >
                        {
                            item.navigateKey === 'home' ? <AntDesignIcon name={item.navigateKey} size={25} color='#fff' />
                                : item.navigateKey === 'cities' ? <MaterialIcon name='location-city' size={25} color='#fff' />
                                    : item.navigateKey === 'settings' ? <FeatherIcon name={item.navigateKey} size={25} color='#fff' />
                                        : null
                        }
                        <Text style={route.name === item.navigateKey ? [styles.menuItem, { fontWeight: 'bold' }] : styles.menuItem}>{item.title}</Text>
                    </Pressable>
                ))
            }
        </View>
    )
}

export default Footer;