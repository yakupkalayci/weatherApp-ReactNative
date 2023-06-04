// Import React
import { useState, useEffect } from "react";
import { View, Text } from "react-native";

// Import react-native-maps
import MapView, { Marker, LatLng, Callout } from "react-native-maps";

// Import Weather Api
import { useGetWeatherByCityQuery } from '../../api/weather';

// Import Navigation
import { useNavigation } from "@react-navigation/native";

// Import Api
import { getCityLocationFromCoordinates } from "../../api/location";

// Import Types
import { Location, Address } from "../../common/types/location";

// Import Components
import WeatherCard from "../../components/weather-card/WeatherCard";

import styles from '../../assets/styles/map.style'

function Map(): JSX.Element {
    // useStates
    const [pin, setPin] = useState<LatLng>({ latitude: 0, longitude: 0 });
    const [city, setCity] = useState<Address>();

    // variables
    const navigation = useNavigation();
    const { data, error, isLoading } = useGetWeatherByCityQuery({ latitude: pin.latitude, longitude: pin.longitude });

    // method for navigating to details screen
    const navigatetoDetails = () => {
        navigation.navigate('details', { city: city?.city || city?.province || city?.town || city?.village, data: data });
    }

    // useEffects
    useEffect(() => {
        getCityLocationFromCoordinates(pin.latitude, pin.longitude)
            .then(data => setCity(data.address))
            .catch(err => console.log(err));
    }, [pin]);

    return (
        <View style={styles.mapContainer}>
            <Text style={styles.infoText}>Press long to see the weather forecast of that place!</Text>
            <MapView
                provider="google"
                zoomEnabled={true}
                zoomControlEnabled={true}
                onLongPress={(e) => setPin({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude })}
                style={styles.map}
                initialRegion={{
                    latitude: 41.00824,
                    longitude: 28.97836,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={pin}
                    draggable={true}
                    onDragEnd={(e) => setPin({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude })}
                >
                    <Callout tooltip onPress={() => navigatetoDetails()}>
                        <View>
                            <WeatherCard cityCoord={pin} extraName={city?.city || city?.province || city?.town || city?.village || city?.state || city?.country} />
                        </View>
                    </Callout>
                </Marker>
            </MapView>
        </View>
    )
}

export default Map;