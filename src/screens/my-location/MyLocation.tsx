// Import React
import {useState, useEffect, useCallback} from 'react';
import {ScrollView, Text, RefreshControl} from 'react-native';

// Import Store
import { useAppSelector } from '../../store/hooks';
import { selectTheme } from '../../store/reducers/weatherReducer';

// Import Geolocation
import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation';

// Import React-Navigation
import {useNavigation} from '@react-navigation/native';

// Import API
import {useGetWeatherByCityQuery} from '../../api/weather';
import {getCityLocationFromCoordinates} from '../../api/location';

import {translate} from '../../common/utils/translate';

// Import Components
import WeatherDetailsContainer from '../../components/weather-details-container/WeatherDetailsContainer';

// Import Styles
import {customStyles} from '../../assets/styles/myLocation.style';

function MyLocation(): JSX.Element {
  // useState
  const [location, setLocation] = useState<GeolocationResponse>();
  const [city, setCity] = useState();
  const [refreshing, setRefreshing] = useState(false);

  // variables
  const theme = useAppSelector(selectTheme);
  const styles = customStyles(theme);

  // Query Variables
  const {data, error, isLoading} = useGetWeatherByCityQuery({
    latitude: location?.coords.latitude,
    longitude: location?.coords.longitude,
  });

  // Navigation Variables
  const navigation = useNavigation();

  // refresh method
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // useEffects
  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => setLocation(info),
      error => console.log(error),
    );
  }, []);

  useEffect(() => {
    getCityLocationFromCoordinates(location?.coords.latitude, location?.coords.longitude)
      .then(data => setCity(data.address))
      .catch(err => console.log(err));
  }, [location]);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <Text onPress={() => navigation.navigate('map')} style={styles.headerLink}>
        {translate('COMPONENTS.BUTTON.TITLES.CHOOSE_ON_MAP')}
      </Text>
      {isLoading ? (
        <Text>{translate('PAGES.LOCATION.MESSAGES.LOADING')}</Text>
      ) : error ? (
        <>
          <Text>{translate('PAGES.LOCATION.MESSAGES.ERROR')}</Text>
        </>
      ) : (
        <>
          <WeatherDetailsContainer
            city={city?.state || city?.city || city?.province || city?.town || city?.village}
            data={data}
          />
        </>
      )}
    </ScrollView>
  );
}

export default MyLocation;
