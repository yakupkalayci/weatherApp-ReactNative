// Import React
import {View, Text, Image} from 'react-native';

// Import Store
import {selectTheme} from '../../../store/reducers/weatherReducer';
import {useAppSelector} from '../../../store/hooks';

// Import Utils
import {translateWeatherCondidition} from '../../../common/utils/translateWeatherCondition';

// Import Styles
import {customStyles} from '../../../assets/styles/weatherDetailsContainer.style';

interface IDescriptionProps {
  icon: string;
  main: string;
  description: string;
  lang: 'en' | 'tr';
}

function Description(props: IDescriptionProps): JSX.Element {
  // destruct props
  const {icon, main, description, lang} = props;

  // variables
  const theme = useAppSelector(selectTheme);
  const styles = customStyles(theme);

  return (
    <View style={styles.description}>
      <Image
        source={{uri: `https://openweathermap.org/img/wn/${icon}@4x.png`}}
        style={styles.descriptionImage}
      />
      <Text style={styles.heading}>{translateWeatherCondidition(main, lang)}</Text>
      <Text>{description}</Text>
    </View>
  );
}

export default Description;
