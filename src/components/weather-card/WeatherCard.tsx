import { Button, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

import styles from '../../assets/styles/weatherCard.style';

interface IWeatherCardProps {
    city: string;
    temp: number;
    minTemp: number;
    maxTemp: number;
    humidity: number;
    wind: number;
    feelsLike: number;
}

function WeatherCard(props:IWeatherCardProps):JSX.Element {

    // destruct props
    const { city, temp, minTemp, maxTemp, humidity, wind, feelsLike } = props;

    return (
        <View style={styles.container}>
            <View style={styles.firstRow}>
                <Text style={styles.bigText}>{city}</Text>
                <View >
                    <Image source={{uri: 'http://openweathermap.org/img/wn/02d@2x.png'}}/>
                    <Text style={styles.bigText}>{temp}&deg;C</Text>
                </View>
            </View>
            <View style={styles.secondRow}>
                <View>
                    <Text>Min/Max: {minTemp}/{maxTemp}</Text>
                    <Text>Humidity: %{humidity}</Text>  
                </View>
                <View>
                    <Text>Wind: {wind}</Text>
                    <Text>Feels Like: {feelsLike}</Text>
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