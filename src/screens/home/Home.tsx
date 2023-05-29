// Import Rect
import { View, Text, ScrollView } from "react-native";

// Import Redux
import { useAppSelector } from "../../store/hooks";

// Import Components
import WeatherCard from "../../components/weather-card/WeatherCard";

// styles
import styles from '../../assets/styles/home.style';

function Home():JSX.Element {

    // variables
    const myCities = useAppSelector(state => state.weather.myCities);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {
                myCities?.map((city, index) => (
                    <WeatherCard key={index} cityName={city} />
                ))
            }
        </ScrollView>
    )
}

export default Home;