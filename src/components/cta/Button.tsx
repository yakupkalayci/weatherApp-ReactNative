// Import React
import { TouchableOpacity, Text, ViewStyle } from "react-native";

// Import Constants
import { BUTTON_SİZE } from "../../common/constants/buttonSize";
import { BASE_COLORS } from "../../common/constants/baseColors";

import styles from '../../assets/styles/button.style';

interface IButtonProps {
    width: BUTTON_SİZE;
    bgColor: BASE_COLORS;
    textColor: BASE_COLORS;
    text: string;
    onPress: () => void;
    extraStyles?: ViewStyle
}

function Button(props:IButtonProps):JSX.Element {

    // destruct props
    const { width, bgColor, textColor, text, onPress, extraStyles } = props;

    const extraStylesContainer = {
        width: width,
        backgroundColor: bgColor
    }

    const extraStylesText = {
        color: textColor
    }

    const containerStyle = {...styles.container, ...extraStylesContainer, ...extraStyles};
    const textStyle = {...styles.text, ...extraStylesText};
    
    return (
        <TouchableOpacity style={containerStyle} onPress={onPress}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;