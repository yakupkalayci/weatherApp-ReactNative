// Import React
import { View, Text } from "react-native"

interface IDetailsProps {
    humidity: string;
    wind_speed: string;
    feels_like: string;
    min: string;
    max: string;
}

import styles from '../../../assets/styles/weatherDetailsContainer.style';


function Details(props: IDetailsProps): JSX.Element {

    // destruct props
    const { humidity, wind_speed, feels_like, min, max } = props;

    return (
        <View style={styles.details}>
            <View style={styles.detailRow}>
                <Text>Nem:</Text>
                <Text>%{humidity}</Text>
            </View>
            <View style={styles.detailRow}>
                <Text>Rüzgar</Text>
                <Text>{parseInt(wind_speed)} km/h</Text>
            </View>
            <View style={styles.detailRow}>
                <Text>Hissedilen Sıcaklık</Text>
                <Text>{parseInt(feels_like)}&deg;C</Text>
            </View>
            <View style={styles.detailRow}>
                <Text>Düşük / Yüksek:</Text>
                <Text>{parseInt(min)}&deg;C / {parseInt(max)}&deg;C</Text>
            </View>
        </View>
    )
}

export default Details;