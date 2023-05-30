// Import Rect
import { useState, useCallback } from "react";
import { ScrollView, RefreshControl } from "react-native";

// Import Redux
import { useAppSelector } from "../../store/hooks";

// Import Components
import WeatherCard from "../../components/weather-card/WeatherCard";

// styles
import styles from '../../assets/styles/home.style';

function Home(): JSX.Element {
    // useState
    const [refreshing, setRefreshing] = useState(false);

    // refresh method
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    // variables
    const myCities = useAppSelector(state => state.weather.myCities);

    return (
        <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            contentContainerStyle={styles.container}
        >
            {
                myCities?.map((city, index) => (
                    <WeatherCard key={index} cityName={city} />
                ))
            }
        </ScrollView>
    )
}

export default Home;