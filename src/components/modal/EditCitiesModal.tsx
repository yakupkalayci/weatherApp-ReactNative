// Import React
import { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';

// Import Store
import { useAppSelector } from '../../store/hooks';

// Import Constants
import { BASE_COLORS } from '../../common/constants/baseColors';
import { BUTTON_SİZE } from '../../common/constants/buttonSize';

// Import Utils
import { getRandomColor } from "../../common/utils/getRandomColor";

// Import React-Native-Modal
import Modal from 'react-native-modal';

// Import React-Native-Toast
import Toast from 'react-native-toast-message';

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
    const [isVisibleModal1, setIsVisibleModal1] = useState(false);
    const [isVisibleModal2, setIsVisibleModal2] = useState(false);
    const [isVisibleModal3, setIsVisibleModal3] = useState(false);
    const [isVisibleModal4, setIsVisibleModal4] = useState(false);
    const [isVisibleModal5, setIsVisibleModal5] = useState(false);

    // methods
    const toogleModalVisible = (index:number) => {
        switch (index) {
            case 0:
                setIsVisibleModal1(!isVisibleModal1);
                break;
            case 1:
                setIsVisibleModal2(!isVisibleModal2);
                break;
            case 2:
                setIsVisibleModal3(!isVisibleModal3);
                break;
            case 3:
                setIsVisibleModal4(!isVisibleModal4);
                break;
            case 4:
                setIsVisibleModal5(!isVisibleModal5);
                break;
        }
    }

    const isModalVisible = (index:number) => {
        switch (index) {
            case 0:
                return isVisibleModal1;
            case 1:
                return isVisibleModal2;
            case 2:
                return isVisibleModal3;
            case 3:
                return isVisibleModal4;
            case 4:
                return isVisibleModal5;
            default: 
                return false;
        }
    }

    const getSetStateMethod = (index:number) => {
        switch (index) {
            case 0:
                return setIsVisibleModal1;
            case 1:
                return setIsVisibleModal2;
            case 2:
                return setIsVisibleModal3;
            case 3:
                return setIsVisibleModal4;
            case 4:
                return setIsVisibleModal5;
            default: 
                return () => {}
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
                                bgColor={getRandomColor()}
                                textColor={BASE_COLORS.white}
                                text={`Change City ${index + 1}`}
                                onPress={() => { toogleModalVisible(index) }}
                                width={BUTTON_SİZE.medium}
                                extraStyles={{ marginBottom: 20 }}
                            />
                        ))
                    }
                    {
                        mainCities.map((city, index) => (
                            <ChangeCityModal
                                key={city}
                                isVisible={isModalVisible(index)}
                                selectedValue={city}
                                setVisible={getSetStateMethod(index)}
                            />
                        ))
                    }
                </View>
            </View>
            <Toast />
        </Modal>
    )
}

export default EditCitiesModal;