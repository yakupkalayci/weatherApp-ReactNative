// Import React
import { View, Text } from "react-native";

// Import Constants
import { BUTTON_SİZE } from "../../common/constants/buttonSize";
import { BASE_COLORS } from "../../common/constants/baseColors";


// Import Components
import Button from "../../components/cta/Button";

import styles from '../../assets/styles/settings.style';

function Settings(): JSX.Element {
    return (
        <View style={styles.container}>
            <Button
                bgColor={BASE_COLORS.black}
                width={BUTTON_SİZE.medium}
                textColor={BASE_COLORS.white}
                text="Edit Home Page"
                onPress={() => { }}
            />
            <Button 
                bgColor={BASE_COLORS.red}
                onPress={() => {}}
                textColor={BASE_COLORS.white}
                text="Change Lang"
                width={BUTTON_SİZE.medium}
            />
            <Button 
                bgColor={BASE_COLORS.blue}
                onPress={() => {}}
                textColor={BASE_COLORS.white}
                text="Change Theme"
                width={BUTTON_SİZE.medium}
            />
        </View>
    )
}

export default Settings;