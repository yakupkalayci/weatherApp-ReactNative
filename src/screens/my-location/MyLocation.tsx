// Import React
import { useState, useEffect, useCallback } from "react";
import { ScrollView, View, Text, RefreshControl, Button } from "react-native";

// Import Geolocation
import Geolocation, {GeolocationResponse} from "@react-native-community/geolocation";

// Import React-Navigation
import { useNavigation } from "@react-navigation/native";

// Import API
import { useGetWeatherByCityQuery } from "../../api/weather";
import { getCityLocationFromCoordinates } from "../../api/location";

import { translate } from "../../common/utils/translate";

// Import Components
import WeatherDetailsContainer from "../../components/weather-details-container/WeatherDetailsContainer";

import styles from '../../assets/styles/myLocation.style';

function MyLocation(): JSX.Element {

    // useState
    const [location, setLocation] = useState<GeolocationResponse>();
    const [city, setCity] = useState();
    const [refreshing, setRefreshing] = useState(false);

    // Query Variables
    const { data, error, isLoading } = useGetWeatherByCityQuery({ lat: location?.coords.latitude, long: location?.coords.longitude });

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
        Geolocation.getCurrentPosition(info => setLocation(info), error => console.log(error));
    }, []);

    useEffect(() => {
        getCityLocationFromCoordinates(location?.coords.latitude, location?.coords.longitude)
            .then(data => setCity(data.address))
            .catch(err => console.log(err));
    }, [location]);

    return (
        <ScrollView 
            style={styles.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <Text onPress={() => navigation.navigate('map')} style={styles.headerLink}>{translate("COMPONENTS.BUTTON.TITLES.CHOOSE_ON_MAP")}</Text>
            {
                isLoading ? (
                    <Text>{translate("PAGES.LOCATION.MESSAGES.LOADING")}</Text>
                ) :
                error ? (
                    <>
                        <Text>{translate("PAGES.LOCATION.MESSAGES.ERROR")}</Text>
                    </>
                ) : (
                    <>
                        <WeatherDetailsContainer city={city?.state || city?.city || city?.province || city?.town || city?.village} data={data} />
                    </>
                )
            }
        </ScrollView>
    )
}

export default MyLocation;