// Import React
import {View, Text} from 'react-native';

// Import Store
import {selectTheme} from '../../../store/reducers/weatherReducer';
import {useAppSelector} from '../../../store/hooks';

// Import Utils
import {translate} from '../../../common/utils/translate';

// Import Styles
import {customStyles} from '../../../assets/styles/weatherDetailsContainer.style';

interface IDetailsProps {
  humidity: number;
  wind_speed: number;
  feels_like: number;
  min: number;
  max: number;
}

function Details(props: IDetailsProps): JSX.Element {
  // destruct props
  const {humidity, wind_speed, feels_like, min, max} = props;

  // variables
  const theme = useAppSelector(selectTheme);
  const styles = customStyles(theme);

  return (
    <View style={styles.details}>
      <View style={styles.detailRow}>
        <Text style={styles.detailText}>{translate('COMPONENTS.WEATHER_CARD.HUMIDITY')}:</Text>
        <Text style={styles.detailText}>%{humidity}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailText}>{translate('COMPONENTS.WEATHER_CARD.WIND')}</Text>
        <Text style={styles.detailText}>{parseInt(wind_speed.toString())} km/h</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailText}>{translate('COMPONENTS.WEATHER_CARD.FEELS_LIKE')}</Text>
        <Text style={styles.detailText}>{parseInt(feels_like.toString())}&deg;C</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailText}>{translate('COMPONENTS.WEATHER_CARD.MIN_MAX')}</Text>
        <Text style={styles.detailText}>
          {parseInt(min.toString())}&deg;C / {parseInt(max.toString())}&deg;C
        </Text>
      </View>
    </View>
  );
}

export default Details;
