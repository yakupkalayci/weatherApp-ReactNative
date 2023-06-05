// Import React
import {ScrollView} from 'react-native';

// Import React-Navigation
import {useRoute} from '@react-navigation/native';

// Import Components
import WeatherDetailsContainer from '../../components/weather-details-container/WeatherDetailsContainer';

// Import Styles
import styles from '../../assets/styles/weatherDetails.style';

function WeatherDetails(): JSX.Element {
  // variables
  const route = useRoute();

  return (
    <ScrollView style={styles.container}>
      <WeatherDetailsContainer city={route.params?.city} data={route.params?.data} />
    </ScrollView>
  );
}

export default WeatherDetails;
