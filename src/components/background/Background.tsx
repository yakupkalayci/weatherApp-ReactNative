// Import React
import React from 'react';
import { View, StyleSheet } from 'react-native';

// Import Store
import { useAppSelector } from '../../store/hooks';
import { selectTheme } from '../../store/reducers/weatherReducer';

// Import Theme
import { darkMode } from '../../common/theme/darkMode';
import { lightMode } from '../../common/theme/lightMode';

// Import react-native-svg
import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg';

const Background = ({ children }) => {
  // Store Variables
  const theme = useAppSelector(selectTheme);

  // Color Variables
  const FROM_COLOR =
    theme === 'dark' ? darkMode.backgroundFromColor : lightMode.backgroundFromColor;
  const TO_COLOR = theme === 'dark' ? darkMode.backgroundToColor : lightMode.backgroundToColor;

  return (
    <View style={{ flex: 1 }}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0" stopColor={FROM_COLOR} />
            <Stop offset="1" stopColor={TO_COLOR} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      {children}
    </View>
  );
};

export default Background;
