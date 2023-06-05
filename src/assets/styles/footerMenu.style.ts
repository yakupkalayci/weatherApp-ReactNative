import {StyleSheet} from 'react-native';
import { Themes } from '../../common/theme/type';
import { darkMode } from '../../common/theme/darkMode';
import { lightMode } from '../../common/theme/lightMode';

export const customStyle = (theme:Themes) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: theme === 'dark' ? darkMode.footerBgColor : lightMode.footerBgColor,
  },
  menuItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    color: theme === 'dark' ? darkMode.primaryText : lightMode.primaryText,
    fontSize: 15,
    paddingTop: 5,
    paddingLeft: 3,
  },
  selectedMenuItem: {
    fontWeight: 'bold'
    }
});
