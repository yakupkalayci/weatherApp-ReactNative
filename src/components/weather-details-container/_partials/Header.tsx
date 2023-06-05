// Import React
import {View, Text} from 'react-native';

// Import Store
import {selectTheme} from '../../../store/reducers/weatherReducer';
import {useAppSelector} from '../../../store/hooks';

interface IHeaderProps {
  city: string;
  temp: number;
}

import {customStyles} from '../../../assets/styles/weatherDetailsContainer.style';

function Header(props: IHeaderProps): JSX.Element {
  // destruct props
  const {city, temp} = props;

  // variables
  const theme = useAppSelector(selectTheme);
  const styles = customStyles(theme);

  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{city}</Text>
      <Text style={styles.heading}>{parseInt(temp.toString())}&deg;</Text>
    </View>
  );
}

export default Header;
