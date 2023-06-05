// Import React
import {View, Text, Image} from 'react-native';
import {WEATHER_CONDITIONS} from '../../../common/constants/weatherConditions';

// Import Utils
import {formatCityName} from '../../../common/utils/formatCityName';
import {translateWeatherCondidition} from '../../../common/utils/translateWeatherCondition';

// Import Types
import {WeatherDataType} from '../../../common/types/weatherData';

interface FirstRowProps {
  cityName?: string;
  extraName?: string;
  data: WeatherDataType;
  renderOnLoading: (data: any) => WEATHER_CONDITIONS;
  lang: 'en' | 'tr';
  styles: object;
}

function FirstRow(props: FirstRowProps) {
  // destryct props
  const {data, styles, cityName, extraName, renderOnLoading, lang} = props;

  return (
    <View style={styles.firstRow}>
      <View style={styles.cityNameContainer}>
        <Text style={[styles.bigText, styles.cityName]}>
          {cityName ? formatCityName(cityName) : extraName}
        </Text>
        <Text style={[styles.bigText, styles.temp]}>
          {renderOnLoading(parseInt(data?.current.temp.toString()))}&deg;
        </Text>
      </View>
      <View style={styles.weatherContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: `https://openweathermap.org/img/wn/${data?.current.weather[0].icon}@2x.png`,
          }}
        />
        <Text style={styles.bigText}>
          {translateWeatherCondidition(renderOnLoading(data?.current.weather[0].main), lang)}
        </Text>
      </View>
    </View>
  );
}

export default FirstRow;
