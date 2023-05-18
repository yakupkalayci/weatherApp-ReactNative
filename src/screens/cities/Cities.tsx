// Import React
import { View, Text, FlatList } from "react-native";

// Components
import WeatherCard from "../../components/weather-card/WeatherCard";

// Constants
import { cities } from "../../common/constants/cities";

// styles
import styles from '../../assets/styles/cities.style';

function Cities(): JSX.Element {

    return (
        <View style={styles.container}>
            <FlatList 
                // contentContainerStyle={styles.secondContainer}
                data={cities} 
                renderItem={({ item }) => <WeatherCard cityName={item.name} />} 
                keyExtractor={item => item.plaka.toString()} 
            />
        </View>
    )
}

export default Cities;