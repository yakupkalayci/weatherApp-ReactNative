// Import React
import { View, Text, FlatList } from "react-native"

// Import Utils
import { getDay } from "../../../common/utils/getDay";

// Import Components
import Card from './Card';

interface ITimelyProps {
    title: string;
    data: any;
}

import styles from '../../../assets/styles/weatherDetailsContainer.style';


function Timely(props: ITimelyProps): JSX.Element {

    // destruct props
    const { title, data } = props;
        

    return (
        <View style={styles.timely}>
            <Text style={[styles.heading, styles.sectionHeading]}>{title}</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Card 
                        time={title === 'Hourly' ? new Date(item.dt * 1000).getHours()+":00" : getDay(item.dt)} 
                        descriptionIcon={item.weather[0].icon} 
                        temp={title === 'Hourly' ? item.temp : item.temp.day} 
                    />
                )}
                horizontal={true}
            />
        </View>
    )
}

export default Timely;