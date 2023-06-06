// Import React
import {useState} from 'react';
import {View} from 'react-native';

// Import Store
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {changeStoreTheme, changeStoreLang, selectTheme} from '../../store/reducers/weatherReducer';

// Import i18n
import i18n from '../../common/locales/i18n';

// Import Constants
import {BUTTON_SİZE} from '../../common/constants/buttonSize';
import {BASE_COLORS} from '../../common/constants/baseColors';
import {CUSTOM_ICON_LIST} from '../../common/constants/icon/customIconList';

// Import Utils
import {translate} from '../../common/utils/translate';

// Import Partials
import Setting from './_partials/Setting';

// Import Components
import Button from '../../components/cta/Button';
import EditCitiesModal from '../../components/modal/EditCitiesModal';

// Import Styles
import {customStyles} from '../../assets/styles/settings.style';

function Settings(): JSX.Element {
  // store variables
  const dispatch = useAppDispatch();
  const storeTheme = useAppSelector(selectTheme);
  const storeLang = useAppSelector(state => state.weather.lang);

  // states
  const [editModal, setEditModal] = useState(false);

  // variables
  const styles = customStyles(storeTheme);

  // method for open and close EditCities Modal
  const toogleModal = () => {
    setEditModal(!editModal);
  };

  // method for changing the app language and theme
  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en');
    dispatch(changeStoreLang());
  }
  const changeTheme = () => { 
    dispatch(changeStoreTheme());
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Setting 
          title='PAGES.SETTINGS.SECTION_TITLES.LANGUAGE'
          switchValue={Boolean(storeLang === 'en')}
          onSwitchValueChange={changeLang}
          leftIconName={CUSTOM_ICON_LIST.TR}
          rightIconName={CUSTOM_ICON_LIST.UK}
          styles={styles}
          customIcon={true}
        />
        <Setting 
          title='PAGES.SETTINGS.SECTION_TITLES.THEME'
          switchValue={Boolean(storeTheme === 'light')}
          onSwitchValueChange={changeTheme}
          leftIconName={CUSTOM_ICON_LIST.LightDown}
          rightIconName={CUSTOM_ICON_LIST.LightUp}
          styles={styles}
          customIcon={false}
        />
        <View style={styles.section}>
          <Button
            bgColor={BASE_COLORS.black}
            width={BUTTON_SİZE.medium}
            textColor={BASE_COLORS.white}
            text={translate('COMPONENTS.BUTTON.TITLES.EDIT_HOME_PAGE')}
            onPress={toogleModal}
          />
        </View>
      </View>
      <EditCitiesModal visible={editModal} toogleModal={toogleModal} />
    </View>
  );
}

export default Settings;
