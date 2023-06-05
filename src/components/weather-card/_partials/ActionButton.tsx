// Import React
import {View, Text, TouchableOpacity} from 'react-native';

// Import Utils
import {translate} from '../../../common/utils/translate';

// Import Vector Icons
import Icon from 'react-native-vector-icons/Entypo';

interface SecondRowProps {
  onPress: () => void;
  styles: object;
}

function ActionButton(props: SecondRowProps) {
  // destryct props
  const {onPress, styles} = props;

  return (
    <View>
      <TouchableOpacity style={styles.details} onPress={onPress}>
        <Text style={styles.linkText}>{translate('COMPONENTS.WEATHER_CARD.SHOW_MORE')}</Text>
        <Icon name="arrow-long-right" size={20} />
      </TouchableOpacity>
    </View>
  );
}

export default ActionButton;
