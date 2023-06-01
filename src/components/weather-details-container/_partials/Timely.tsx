// Import React
import { View, Text, FlatList } from "react-native"

// Import Store
import { selectTheme } from "../../../store/reducers/weatherReducer";
import { useAppSelector } from "../../../store/hooks";

// Import Utils
import { getDay } from "../../../common/utils/getDay";
import { translate } from "../../../common/utils/translate";

// Import Components
import Card from './Card';

import {customStyles} from '../../../assets/styles/weatherDetailsContainer.style';

interface ITimelyProps {
    title: string;
    data: any;
}

function Timely(props: ITimelyProps): JSX.Element {

    // destruct props
    const { title, data } = props;    

    // variables
    const theme = useAppSelector(selectTheme);
    const styles = customStyles(theme);

    return (
        <View style={styles.timely}>
            <Text style={[styles.heading, styles.sectionHeading]}>{title}</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Card 
                        time={title === 'Hourly' || title === 'Saatlik' ? new Date(item.dt * 1000).getHours()+":00" : translate(`COMPONENTS.WEATHER_DETAILS.DAYS.${getDay(item.dt).toUpperCase()}`)} 
                        descriptionIcon={item.weather[0].icon} 
                        temp={title === 'Hourly' || title === 'Saatlik' ? item.temp : item.temp.day} 
                    />
                )}
                horizontal={true}
            />
        </View>
    )
}

export default Timely;