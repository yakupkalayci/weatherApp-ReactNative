// Import React
import { useState } from "react";
import { View, Switch, Text } from "react-native";

// Import Constants
import { BUTTON_SİZE } from "../../common/constants/buttonSize";
import { BASE_COLORS } from "../../common/constants/baseColors";
import { CUSTOM_ICON_LIST } from "../../common/constants/icon/customIconList";
import { CUSTOM_ICON_SIZES } from "../../common/constants/icon/iconSizes";


// Import Components
import Button from "../../components/cta/Button";
import EditCitiesModal from "../../components/modal/EditCitiesModal";
import CustomIcon from "../../components/icons/CustomIcon";
import Icon from 'react-native-vector-icons/Entypo';

import styles from '../../assets/styles/settings.style';

function Settings(): JSX.Element {

    // states
    const [editModal, setEditModal] = useState(false);
    const [lang, setLang] = useState(false);
    const [theme, setTheme] = useState(false);

    const toogleModal = () => {
        setEditModal(!editModal);
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Language:</Text>
                    <View style={styles.lang}>
                        <CustomIcon name={CUSTOM_ICON_LIST.TR} size={CUSTOM_ICON_SIZES.LARGE} />
                        <Switch 
                            value={lang}
                        />
                        <CustomIcon name={CUSTOM_ICON_LIST.UK} size={CUSTOM_ICON_SIZES.LARGE} />

                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Theme:</Text>
                    <View style={styles.lang}>
                        <Icon name='light-down' size={30} />
                        <Switch 
                            value={theme}
                        />
                        <Icon name='light-up' size={30} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Button
                        bgColor={BASE_COLORS.black}
                        width={BUTTON_SİZE.medium}
                        textColor={BASE_COLORS.white}
                        text="Edit Home Page"
                        onPress={toogleModal}
                    />
                </View>
            </View>
            <EditCitiesModal visible={editModal} toogleModal={toogleModal}  />
        </View>
    )
}

export default Settings;