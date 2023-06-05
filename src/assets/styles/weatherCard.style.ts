// Import React-Native
import {StyleSheet} from 'react-native';

// Import Themes
import {darkMode} from '../../common/theme/darkMode';
import {lightMode} from '../../common/theme/lightMode';

import {BASE_COLORS} from '../../common/constants/baseColors';

// Import Types
import {Themes} from '../../common/theme/type';

export const customStyles = (theme: Themes) =>
  StyleSheet.create({
    container: {
      minWidth: '80%',
      backgroundColor: '#0984e3',
      borderRadius: 15,
      padding: 10,
      marginVertical: 20,
      shadowOpacity: 0.5,
      shadowColor: 'green',
    },
    firstRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    secondRow: {
      marginTop: 20,
    },
    detailRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    bigText: {
      fontSize: 21,
      fontWeight: 'bold',
      color: lightMode.primaryText,
    },
    details: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      paddingTop: 10,
      alignItems: 'center',
    },
    cityNameContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cityName: {
      paddingRight: 10,
    },
    temp: {
      color: theme === 'dark' ? darkMode.primaryText : lightMode.secondaryText,
    },
    weatherContainer: {
      alignItems: 'center',
      marginVertical: 10,
    },
    icon: {
      width: 100,
      height: 50,
    },
    linkText: {
      marginRight: 10,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    errorMessage: {
      color: BASE_COLORS.black,
    },
  });
