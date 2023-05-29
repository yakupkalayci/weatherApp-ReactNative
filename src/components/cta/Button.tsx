// Import React
import { TouchableOpacity, Text, ViewStyle } from "react-native";

// Import Constants
import { BUTTON_SİZE } from "../../common/constants/buttonSize";
import { BASE_COLORS } from "../../common/constants/baseColors";

import styles from '../../assets/styles/button.style';

interface IButtonProps {
    width: BUTTON_SİZE;
    bgColor: BASE_COLORS | string;
    textColor: BASE_COLORS;
    text: string;
    onPress: () => void;
    extraStyles?: ViewStyle
}

function Button(props:IButtonProps):JSX.Element {

    // destruct props
    const { width, bgColor:backgroundColor, textColor:color, text, onPress, extraStyles } = props;

    const containerStyle = {...styles.container, width, backgroundColor, ...extraStyles};
    const textStyle = {...styles.text, color};
    
    return (
        <TouchableOpacity style={containerStyle} onPress={onPress}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;