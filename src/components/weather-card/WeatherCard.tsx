// Import React
import { Text, TouchableOpacity, View, Image } from 'react-native';

// Import Store
import { useAppSelector } from '../../store/hooks';
import { selectTheme } from '../../store/reducers/weatherReducer';

// Import Reanimated
import Animated, { LightSpeedInLeft, Layout } from 'react-native-reanimated';

// Import React-Navigation
import { useNavigation } from '@react-navigation/native';

// Import Utils
import { getCity } from '../../common/utils/getCity';
import { formatCityName } from '../../common/utils/formatCityName';
import { translate } from '../../common/utils/translate';
import { translateWeatherCondidition } from '../../common/utils/translateWeatherCondition';

// Import Api
import { useGetWeatherByCityQuery } from '../../api/weather';

// Import Vector Icons
import Icon from 'react-native-vector-icons/Entypo'

// styles
import {customStyles} from '../../assets/styles/weatherCard.style';

interface IWeatherCardProps {
    cityName?: string;
    cityCoord?: object;
    extraName?: string;
    lang: string;
}

function WeatherCard(props: IWeatherCardProps): JSX.Element {
    // destruct props
    const { cityName, cityCoord, extraName, lang } = props;

    // variables
    const theme = useAppSelector(selectTheme);
    const styles = customStyles(theme);

    let exp;

    if (cityName) {
        exp = getCity(cityName);
    }
    else if (cityCoord) {
        exp = cityCoord;
    }
    exp.lang = lang;

    // Navigation Variables
    const navigation = useNavigation();

    // Query Variables
    const { data, error, isLoading } = useGetWeatherByCityQuery(exp, {refetchOnMountOrArgChange:true});
    

    // method for navigating to details screen
    const navigatetoDetails = () => {
        navigation.navigate('details', { city: formatCityName(cityName), data: data });
    }

    // method for displaying loading indicator while data is loading instead of NaN
    const renderOnLoading = (data:any) => {
        if(isLoading) {
            return '...'
        } else {
            return data
        }
    }

    if(error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorMessage}>{translate("COMPONENTS.WEATHER_CARD.ERROR")}</Text>
            </View>
        )
    }

    return (
        <Animated.View 
            entering={LightSpeedInLeft} 
            layout={Layout.springify()}
            style={styles.container}
        >
            <View style={styles.firstRow}>
                <View style={styles.cityNameContainer}>
                    <Text style={[styles.bigText, styles.cityName]}>{cityName ? formatCityName(cityName) : extraName}</Text>
                    <Text style={[styles.bigText, styles.temp]}>{renderOnLoading(parseInt(data?.current.temp))}&deg;</Text>
                </View>
                <View style={styles.weatherContainer}>
                    <Image style={styles.icon} source={{ uri: `https://openweathermap.org/img/wn/${data?.current.weather[0].icon}@2x.png` }} />
                    <Text style={styles.bigText}>{translateWeatherCondidition(renderOnLoading(data?.current.weather[0].main), lang)}</Text>
                </View>
            </View>
            <View style={styles.secondRow}>
                <View style={styles.detailRow}>
                    <Text>{translate("COMPONENTS.WEATHER_CARD.MIN_MAX")}: {renderOnLoading(parseInt(data?.daily[0].temp.min))}&deg; / {renderOnLoading(parseInt(data?.daily[0].temp.max))}&deg;</Text>
                    <Text>{translate("COMPONENTS.WEATHER_CARD.WIND")}: {renderOnLoading(parseInt(data?.current.wind_speed))} km/h</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text>{translate("COMPONENTS.WEATHER_CARD.HUMIDITY")}: %{renderOnLoading(data?.current.humidity)}</Text>
                    <Text>{translate("COMPONENTS.WEATHER_CARD.FEELS_LIKE")}: {renderOnLoading(parseInt(data?.current.feels_like))}&deg;</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.details} onPress={navigatetoDetails}>
                    <Text style={styles.linkText}>{translate("COMPONENTS.WEATHER_CARD.SHOW_MORE")}</Text>
                    <Icon name='arrow-long-right' size={20} />
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

export default WeatherCard;