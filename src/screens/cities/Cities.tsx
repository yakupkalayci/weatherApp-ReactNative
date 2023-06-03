// Import React
import { useState, useCallback } from "react";
import { View, FlatList, RefreshControl } from "react-native";

// Import Store
import { useAppSelector } from "../../store/hooks";

// Components
import WeatherCard from "../../components/weather-card/WeatherCard";

// Constants
import { cities } from "../../common/constants/cities";

// styles
import styles from '../../assets/styles/cities.style';

function Cities(): JSX.Element {

    // useState
    const [refreshing, setRefreshing] = useState(false);

    // variables
    const lang = useAppSelector(state => state.weather.lang);

    // refresh method
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                data={cities}
                renderItem={({ item }) => <WeatherCard cityName={item.name} lang={lang} />}
                keyExtractor={item => item.plaka.toString()}
            />
        </View>
    )
}

export default Cities;