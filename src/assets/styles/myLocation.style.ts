import {StyleSheet} from 'react-native';
import {BASE_COLORS} from '../../common/constants/baseColors';
import {Themes} from '../../common/theme/type';
import { lightMode } from '../../common/theme/lightMode';
import { darkMode } from '../../common/theme/darkMode';

export const customStyles = (theme:Themes) => StyleSheet.create({
  container: {
    marginBottom: 150,
  },
  headerLink: {
    alignSelf: 'flex-end',
    paddingRight: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: theme === 'dark' ? darkMode.primaryText : lightMode.primaryText,
  },
});
