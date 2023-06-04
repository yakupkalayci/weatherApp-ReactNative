// Import React
import { View, Text, Image } from 'react-native';

// Import Store
import { selectTheme } from '../../../store/reducers/weatherReducer';
import { useAppSelector } from "../../../store/hooks";

import {customStyles} from '../../../assets/styles/weatherDetailsContainer.style';

interface ICardProps {
    time: number | string;
    descriptionIcon: string;
    temp: string;
}

function Card(props:ICardProps):JSX.Element {

    // destruct props
    const {time, descriptionIcon, temp} = props;

    // variables
    const theme = useAppSelector(selectTheme);
    const styles = customStyles(theme);
 
    return (
        <View style={styles.cardContainer}>
            <Text>{time}</Text>
            <Image style={styles.cardImage} source={{uri: `https://openweathermap.org/img/wn/${descriptionIcon}@2x.png`}} />
            <Text>{parseInt(temp)}&deg;</Text>
        </View>
    )
}

export default Card;