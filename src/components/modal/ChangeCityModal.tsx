// Import Store
import {useAppDispatch} from '../../store/hooks';
import {changeCity} from '../../store/reducers/weatherReducer';

// Import Constants
import {cities} from '../../common/constants/cities';

// Import React-Native-Modal
import Modal from 'react-native-modal';

// Import React-Native-Picker
import {Picker} from '@react-native-community/picker';
import {ItemValue} from '@react-native-community/picker/typings/Picker';

// Import Utils
import {showToast} from '../../common/utils/showToast';

// Import Styles
import styles from '../../assets/styles/changeCityModal.style';

interface IChangeCityModalProps {
  isVisible: boolean;
  selectedValue: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChangeCityModal(props: IChangeCityModalProps): JSX.Element {
  // destruct props
  const {isVisible, selectedValue, setVisible} = props;

  // variables
  const dispatch = useAppDispatch();

  const handlePicker = (itemValue: ItemValue) => {
    dispatch(changeCity({oldCity: selectedValue, newCity: itemValue}));
    setVisible(false);
    showToast('Success', undefined, `You have changed ${selectedValue} to ${itemValue}`);
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={() => setVisible(false)}>
      <Picker
        selectedValue={selectedValue.toLocaleUpperCase()}
        onValueChange={itemValue => handlePicker(itemValue)}
        style={styles.picker}>
        {cities.map(city => (
          <Picker.Item key={city.plaka} label={city.name} value={city.name} />
        ))}
      </Picker>
    </Modal>
  );
}

export default ChangeCityModal;
