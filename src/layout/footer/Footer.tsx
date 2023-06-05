// Import React
import {View, Text, Pressable} from 'react-native';

// Import React Navigation
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {footerMenu} from '../../router/footerMenu';

// Import Store
import { useAppSelector } from '../../store/hooks';
import { selectTheme } from '../../store/reducers/weatherReducer';

// Import Constants
import { darkMode } from '../../common/theme/darkMode';
import { lightMode } from '../../common/theme/lightMode';

// Import Utils
import {translate} from '../../common/utils/translate';

// Import Vector Icons
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

// styles
import {customStyle} from '../../assets/styles/footerMenu.style';

function Footer(): JSX.Element {
  // variables
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useAppSelector(selectTheme);
  const styles = customStyle(theme);

  // method for changing footer menu items icon's color according to the app theme
  const getIconColor = () => {
    return theme === 'dark' ? darkMode.primaryText : lightMode.primaryText;
  }

  return (
    <View style={[styles.container]}>
      {footerMenu.map(item => (
        <Pressable
          key={item.key}
          style={styles.menuItemContainer}
          onPress={() => {
            navigation.navigate(item.navigateKey);
          }}>
          {item.navigateKey === 'home' ? (
            <AntDesignIcon name={item.navigateKey} size={25} color={getIconColor()} />
          ) : item.navigateKey === 'cities' ? (
            <MaterialIcon name="location-city" size={25} color={getIconColor()} />
          ) : item.navigateKey === 'settings' ? (
            <FeatherIcon name={item.navigateKey} size={25} color={getIconColor()} />
          ) : item.navigateKey === 'location' ? (
            <MaterialIcon name="location-on" size={25} color={getIconColor()} />
          ) : null}
          <Text
            style={
              route.name === item.navigateKey
                ? [styles.menuItem, styles.selectedMenuItem]
                : styles.menuItem
            }>
            {translate(`MENU.${item.navigateKey.toUpperCase()}`)}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

export default Footer;
