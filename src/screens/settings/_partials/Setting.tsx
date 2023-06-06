import { View, Text, Switch } from 'react-native';
import { translate } from '../../../common/utils/translate';

import CustomIcon from '../../../components/icons/CustomIcon';
import Icon from 'react-native-vector-icons/Entypo';
import { CUSTOM_ICON_SIZES } from '../../../common/constants/icon/iconSizes';

interface ISettingProps {
    title: string;
    switchValue: boolean | undefined;
    onSwitchValueChange: () => void;
    leftIconName: JSX.Element | string;
    rightIconName: JSX.Element | string;
    styles: object;
    customIcon: boolean;
}

function Setting(props: ISettingProps) {

    // destruct props
    const { title, switchValue, onSwitchValueChange, customIcon, leftIconName, rightIconName, styles } = props;

    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>
                {translate(title)}:
            </Text>
            <View style={styles.lang}>
                {
                    customIcon ? <CustomIcon name={leftIconName} size={CUSTOM_ICON_SIZES.LARGE} /> : <Icon name={leftIconName} size={30} />

                }
                <Switch value={switchValue} onValueChange={() => onSwitchValueChange()} />
                {
                    customIcon ? <CustomIcon name={rightIconName} size={CUSTOM_ICON_SIZES.LARGE} /> : <Icon name={rightIconName} size={30} />

                }
            </View>
        </View>
    )
}

export default Setting;