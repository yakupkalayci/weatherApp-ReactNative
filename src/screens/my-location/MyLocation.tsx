// Import React
import { useState, useEffect } from "react";
import { ScrollView, View, Text, TouchableHighlight, TouchableNativeFeedback } from "react-native";

// Import Geolocation
import Geolocation from "@react-native-community/geolocation";
import { GeolocationResponse } from "@react-native-community/geolocation";

// Import API
import { useGetWeatherByCityQuery } from "../../api/weather";

// Import Utils
import { getCityFromCoordinates } from "../../common/utils/getCityFromCoordinates";

// Import Components
import WeatherDetailsContainer from "../../components/weather-details-container/WeatherDetailsContainer";

import styles from '../../assets/styles/myLocation.style';

function MyLocation(): JSX.Element {

    // useState
    const [location, setLocation] = useState<GeolocationResponse>();
    const [city, setCity] = useState();

    // Query Variables
    const { data, error, isLoading } = useGetWeatherByCityQuery({ lat: location?.coords.latitude, long: location?.coords.longitude });

    // useEffects
    useEffect(() => {
        Geolocation.getCurrentPosition(info => setLocation(info));
    }, []);

    useEffect(() => {
        getCityFromCoordinates(location?.coords.latitude, location?.coords.longitude)
            .then(data => setCity(data))
            .catch(err => console.log(err));
    }, [location]);

    if (isLoading) {
        return <View><Text>Loading..</Text></View>
    }

    if(error) {
        return <View><Text>An error has occured!</Text></View>
    }

    return (
        <ScrollView style={styles.container}>
            <Text onPress={() => console.log("tıklandı")} style={styles.headerLink}>Choose on map</Text>
            <WeatherDetailsContainer city={city?.address?.state} data={data} />
        </ScrollView>
    )
}

export default MyLocation;