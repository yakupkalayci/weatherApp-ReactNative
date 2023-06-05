// Import React
import {useState, useCallback} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';

// Components
import WeatherCard from '../../components/weather-card/WeatherCard';

// Constants
import {cities} from '../../common/constants/cities';

// styles
import styles from '../../assets/styles/cities.style';

function Cities(): JSX.Element {
  // useState
  const [refreshing, setRefreshing] = useState(false);

  // refresh method
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // renderitem method
  const renderItem = ({item}) => {
    return <WeatherCard cityName={item.name} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        data={cities}
        renderItem={renderItem}
        keyExtractor={item => item.plaka.toString()}
      />
    </View>
  );
}

export default Cities;
