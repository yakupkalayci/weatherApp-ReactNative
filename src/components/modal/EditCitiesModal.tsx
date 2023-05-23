// Import React
import { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';

// Import Store
import { useAppSelector } from '../../store/hooks';

// Import Constants
import { BASE_COLORS } from '../../common/constants/baseColors';
import { BUTTON_SİZE } from '../../common/constants/buttonSize';

// Import React-Native-Modal
import Modal from 'react-native-modal';

// Import Components
import ChangeCityModal from './ChangeCityModal';
import Button from '../cta/Button';

import styles from '../../assets/styles/editCitiesModal.style';


interface IEditCitiesModalProps {
    visible: boolean;
    toogleModal: () => void;
}

function EditCitiesModal(props: IEditCitiesModalProps): JSX.Element {

    // destruct props
    const { visible, toogleModal } = props;

    // variables
    const mainCities = useAppSelector(state => state.weather.myCities);

    // useStates
    const [isVisible, setVisible] = useState(false);
    const [isVisible1, setVisible1] = useState(false);
    const [isVisible2, setVisible2] = useState(false);
    const [isVisible3, setVisible3] = useState(false);
    const [isVisible4, setVisible4] = useState(false);

    const x = (index) => {
        switch (index) {
            case 0:
                setVisible(!isVisible);
                break;
            case 1:
                setVisible1(!isVisible1);
                break;
            case 2:
                setVisible2(!isVisible2);
                break;
            case 3:
                setVisible3(!isVisible3);
                break;
            case 4:
                setVisible4(!isVisible4);
                break;
        }
    }

    const y = (index) => {
        switch (index) {
            case 0:
                return isVisible;
            case 1:
                return isVisible1;
            case 2:
                return isVisible2;
            case 3:
                return isVisible3;
            case 4:
                return isVisible4;
        }
    }

    const z = (index) => {
        switch (index) {
            case 0:
                return setVisible;
            case 1:
                return setVisible1;
            case 2:
                return setVisible2;
            case 3:
                return setVisible3;
            case 4:
                return setVisible4;
        }
    }

    return (
        <Modal isVisible={visible} onBackdropPress={(toogleModal)} >
            <View style={styles.container}>
                <View>
                    <Text style={styles.modalHeading}>
                        Edit Cities at the
                    </Text>
                    <Text style={styles.modalHeading}>Home Screen</Text>
                </View>
                <View style={styles.buttons}>
                    {
                        mainCities.map((city, index) => (
                            <Button
                                key={city}
                                bgColor={BASE_COLORS.gray}
                                textColor={BASE_COLORS.white}
                                text={`Change City ${index + 1}`}
                                onPress={() => { x(index) }}
                                width={BUTTON_SİZE.medium}
                                extraStyles={{ marginBottom: 20 }}
                            />
                        ))
                    }
                    {
                        mainCities.map((city, index) => (
                            <ChangeCityModal
                                key={city}
                                isVisible={y(index)}
                                selectedValue={city}
                                setVisible={z(index)}
                            />
                        ))
                    }
                </View>
            </View>
        </Modal>
    )
}

export default EditCitiesModal;