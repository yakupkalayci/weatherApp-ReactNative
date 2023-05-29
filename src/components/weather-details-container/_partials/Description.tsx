// Import React
import { View, Text, FlatList, Image } from "react-native"

interface IDescriptionProps {
    icon: any;
    main: any;
    description: any;
}

import styles from '../../../assets/styles/weatherDetailsContainer.style';


function Description(props: IDescriptionProps): JSX.Element {

    // destruct props
    const { icon, main, description } = props;

    return (
        <View style={styles.description} >
            <Image
                source={{ uri: `https://openweathermap.org/img/wn/${icon}@4x.png` }}
                style={styles.descriptionImage}
            />
            <Text style={styles.heading}>
                {main}
            </Text>
            <Text>
                {description}
            </Text>
        </View>
    )
}

export default Description;