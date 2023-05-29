// Import React
import { View, Text } from "react-native"

interface IHeaderProps {
    city: any;
    temp: any;
}

import styles from '../../../assets/styles/weatherDetailsContainer.style';


function Header(props: IHeaderProps): JSX.Element {

    // destruct props
    const { city, temp } = props;

    return (
        <View style={styles.header}>
            <Text style={styles.heading}>{city}</Text>
            <Text style={styles.heading}>{parseInt(temp)}&deg;</Text>
        </View>
    )
}

export default Header;