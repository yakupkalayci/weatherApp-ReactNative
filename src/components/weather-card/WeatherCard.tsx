// Import React
import { Button, Text, TouchableOpacity, View, Image } from 'react-native';

// Import React-Navigation
import { useNavigation } from '@react-navigation/native';

// Import Utils
import { getCity } from '../../common/utils/getCity';
import { formatCityName } from '../../common/utils/formatCityName';

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

    // Navigation Variables
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.firstRow}>
                <View style={styles.cityNameContainer}>
                    <Text style={[styles.bigText, styles.cityName]}>{formatCityName(cityName)}  </Text>
                    <Text style={styles.bigText}>{parseInt(data?.current.temp)}&deg;</Text>
                </View>
                <View style={styles.weatherContainer}>
                    <Image style={styles.icon} source={{uri: `https://openweathermap.org/img/wn/${data?.current.weather[0].icon}@2x.png`}} />
                    <Text style={styles.bigText}>{data?.current.weather[0].main}</Text>
                </View>
            </View>
            <View style={styles.secondRow}>
                <View style={styles.detailRow}>
                    <Text>Min/Max: {parseInt(data?.daily[0].temp.min)}&deg; / {parseInt(data?.daily[0].temp.max)}&deg;      </Text>
                    <Text>Wind: {parseInt(data?.current.wind_speed) } km/h</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text>Humidity: %{data?.current.humidity}</Text>  
                    <Text>Feels Like: {parseInt(data?.current.feels_like)}&deg;</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.details} onPress={() => navigation.navigate('details', {city: formatCityName(cityName), data:data})}>
                    <Text style={styles.linkText}>Show more</Text>
                    <Icon name='arrow-long-right' size={20}  />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WeatherCard;