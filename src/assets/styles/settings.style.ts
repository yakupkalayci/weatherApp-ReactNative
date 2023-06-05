import {StyleSheet, Dimensions} from 'react-native';

import { Themes } from '../../common/theme/type';
import { lightMode } from '../../common/theme/lightMode';
import { darkMode } from '../../common/theme/darkMode';

export const customStyles = (theme:Themes) => StyleSheet.create({
  container: {
    marginTop: 20,
    height: Dimensions.get('window').height * 0.55,
    alignItems: 'center',
  },
  buttons: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  section: {
    width: Dimensions.get('window').width / 1.5,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingBottom: 30,
  },
  lang: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  sectionTitle: {
    alignSelf: 'flex-start',
    fontStyle: 'italic',
    paddingBottom: 25,
    color: theme === 'dark' ? darkMode.primaryText : lightMode.primaryText
  },
});
