// Import React
import { Button, Text, TouchableOpacity, View, Image } from 'react-native';

// Import Utils
import { getCity } from '../../common/utils/getCity';

// Import Api
import { useGetWeatherByCityQuery } from '../../api/weather';

// Import Vector Icons
import Icon from 'react-native-vector-icons/Entypo'

// styles
import styles from '../../assets/styles/weatherCard.style';

interface IWeatherCardProps {
    cityName: string;
}

function WeatherCard(props:IWeatherCardProps):JSX.Element {
    // destruct props
    const { cityName } = props;

    // Query Variables
    const { data, error, isLoading } = useGetWeatherByCityQuery(getCity(cityName));

    return (
        <View style={styles.container}>
            <View style={styles.firstRow}>
                <Text style={styles.bigText}>{cityName}</Text>
                <View >
                    <Image source={{uri: 'http://openweathermap.org/img/wn/02d@2x.png'}}/>
                    <Text style={styles.bigText}>{data?.current.temp}&deg;C</Text>
                    <Text style={styles.bigText}>{data?.current.weather[0].main}</Text>
                </View>
            </View>
            <View style={styles.secondRow}>
                <View>
                    <Text>Min/Max: {data?.daily[0].temp.min}/{data?.daily[0].temp.max}</Text>
                    <Text>Humidity: %{data?.current.humidity}</Text>  
                </View>
                <View>
                    <Text>Wind: {data?.current.wind_speed}</Text>
                    <Text>Feels Like: {data?.current.feelsLike}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.details}>
                    <Icon name='arrow-long-right' size={20}  />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WeatherCard;