import { View, Text, ScrollView } from "react-native";
import WeatherCard from "../../components/weather-card/WeatherCard";

import styles from '../../assets/styles/home.style';

function Home():JSX.Element {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <WeatherCard city="İstanbul" temp={21} humidity={40} minTemp={13} maxTemp={21} wind={15} feelsLike={20} />
        </ScrollView>
    )
}

export default Home;