// Import React
import { View, Text, Image } from 'react-native';

import styles from '../../../assets/styles/weatherDetailsContainer.style';

interface ICardProps {
    time: number | string;
    descriptionIcon: string;
    temp: string;
}

function Renderitem(props:ICardProps):JSX.Element {

    // destruct props
    const {time, descriptionIcon, temp} = props;
 
    return (
        <View style={styles.cardContainer}>
            <Text>{time}</Text>
            <Image style={styles.cardImage} source={{uri: `https://openweathermap.org/img/wn/${descriptionIcon}@2x.png`}} />
            <Text>{parseInt(temp)}&deg;</Text>
        </View>
    )
}

export default Renderitem;