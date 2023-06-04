// Import React
import { View, Text, Image } from "react-native";
import { WEATHER_CONDITIONS } from "../../../common/constants/weatherConditions";

// Import Utils
import { translate } from "../../../common/utils/translate";

// Import Types
import { WeatherDataType } from "../../../common/types/weatherData";

interface SecondRowProps {
    data: WeatherDataType;
    renderOnLoading: (data: any) => WEATHER_CONDITIONS;
    styles: object;
}

function SecondRow(props:SecondRowProps) {

    // destryct props
    const { data, renderOnLoading, styles } = props;

    return (
        <View style={styles.secondRow}>
            <View style={styles.detailRow}>
                <Text>{translate("COMPONENTS.WEATHER_CARD.MIN_MAX")}: {renderOnLoading(parseInt(data?.daily[0].temp.min.toString()))}&deg; / {renderOnLoading(parseInt(data?.daily[0].temp.max))}&deg;</Text>
                <Text>{translate("COMPONENTS.WEATHER_CARD.WIND")}: {renderOnLoading(parseInt(data?.current.wind_speed.toString()))} km/h</Text>
            </View>
            <View style={styles.detailRow}>
                <Text>{translate("COMPONENTS.WEATHER_CARD.HUMIDITY")}: %{renderOnLoading(data?.current.humidity)}</Text>
                <Text>{translate("COMPONENTS.WEATHER_CARD.FEELS_LIKE")}: {renderOnLoading(parseInt(data?.current.feels_like.toString()))}&deg;</Text>
            </View>
        </View>
    )
}

export default SecondRow;