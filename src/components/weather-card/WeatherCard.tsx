// Import React
import { useEffect } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

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
    cityName?: string;
    cityCoord?: object;
    extraName?: string;
}

function WeatherCard(props: IWeatherCardProps): JSX.Element {
    // destruct props
    const { cityName, cityCoord, extraName } = props;

    let exp;

    if (cityName) {
        exp = getCity(cityName);
    }
    else if (cityCoord) {
        exp = cityCoord;
    }

    // Navigation Variables
    const navigation = useNavigation();

    // Query Variables
    const { data, error, isLoading } = useGetWeatherByCityQuery(exp);

    // method for navigating to details screen
    const navigatetoDetails = () => {
        navigation.navigate('details', { city: formatCityName(cityName), data: data });
    }

    // method for displaying loading indicator while data is loading instead of NaN
    const renderOnLoading = (data:number|string) => {
        if(isLoading) {
            return '...'
        } else {
            return data
        }
    }

    if(error) {
        return (
            <View style={styles.container}>
                <Text>An error has occured! Please refresh the page</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.firstRow}>
                <View style={styles.cityNameContainer}>
                    <Text style={[styles.bigText, styles.cityName]}>{cityName ? formatCityName(cityName) : extraName}</Text>
                    <Text style={styles.bigText}>{renderOnLoading(parseInt(data?.current.temp))}&deg;</Text>
                </View>
                <View style={styles.weatherContainer}>
                    <Image style={styles.icon} source={{ uri: `https://openweathermap.org/img/wn/${data?.current.weather[0].icon}@2x.png` }} />
                    <Text style={styles.bigText}>{renderOnLoading(data?.current.weather[0].main)}</Text>
                </View>
            </View>
            <View style={styles.secondRow}>
                <View style={styles.detailRow}>
                    <Text>Min/Max: {renderOnLoading(parseInt(data?.daily[0].temp.min))}&deg; / {renderOnLoading(parseInt(data?.daily[0].temp.max))}&deg;</Text>
                    <Text>Wind: {renderOnLoading(parseInt(data?.current.wind_speed))} km/h</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text>Humidity: %{renderOnLoading(data?.current.humidity)}</Text>
                    <Text>Feels Like: {renderOnLoading(parseInt(data?.current.feels_like))}&deg;</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.details} onPress={navigatetoDetails}>
                    <Text style={styles.linkText}>Show more</Text>
                    <Icon name='arrow-long-right' size={20} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WeatherCard;