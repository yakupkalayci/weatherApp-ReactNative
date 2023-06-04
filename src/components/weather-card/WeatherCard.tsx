// Import React
import { Text, View } from 'react-native';

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

// Import Api
import { useGetWeatherByCityQuery } from '../../api/weather';

// Import Types
import { WeatherDataType } from '../../common/types/weatherData';

// Import Constants
import { WEATHER_CONDITIONS } from '../../common/constants/weatherConditions';

// Import Partials
import FirstRow from './_partials/FirstRow';
import SecondRow from './_partials/SecondRow';
import ActionButton from './_partials/ActionButton';

// styles
import {customStyles} from '../../assets/styles/weatherCard.style';

interface IWeatherCardProps {
    cityName?: string;
    cityCoord?: object;
    extraName?: string;
}

function WeatherCard(props: IWeatherCardProps): JSX.Element {
    // destruct props
    const { cityName, cityCoord, extraName } = props;

    // variables
    const theme = useAppSelector(selectTheme);
    const lang = useAppSelector(state => state.weather.lang);
    const styles = customStyles(theme);

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
    const renderOnLoading = (data:any): any | '...' => {
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
            <FirstRow data={data} lang={lang} renderOnLoading={renderOnLoading} cityName={cityName} extraName={extraName} styles={styles} />
            <SecondRow data={data} renderOnLoading={renderOnLoading} styles={styles} />
            <ActionButton onPress={navigatetoDetails} styles={styles} />
        </Animated.View>
    )
}

export default WeatherCard;