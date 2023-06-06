// Import React
import {useEffect, useState} from 'react';
import {View, Switch, Text} from 'react-native';

// Import Store
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {changeStoreTheme, changeStoreLang, selectTheme} from '../../store/reducers/weatherReducer';

// Import i18n
import i18n from '../../common/locales/i18n';

// Import Constants
import {BUTTON_SİZE} from '../../common/constants/buttonSize';
import {BASE_COLORS} from '../../common/constants/baseColors';
import {CUSTOM_ICON_LIST} from '../../common/constants/icon/customIconList';
import {CUSTOM_ICON_SIZES} from '../../common/constants/icon/iconSizes';

// Import Utils
import {translate} from '../../common/utils/translate';

// Import Partials
import Setting from './_partials/Setting';

// Import Components
import Button from '../../components/cta/Button';
import EditCitiesModal from '../../components/modal/EditCitiesModal';
import CustomIcon from '../../components/icons/CustomIcon';
import Icon from 'react-native-vector-icons/Entypo';

// Import Styles
import {customStyles} from '../../assets/styles/settings.style';

function Settings(): JSX.Element {
  // store variables
  const dispatch = useAppDispatch();
  const storeTheme = useAppSelector(selectTheme);
  const storeLang = useAppSelector(state => state.weather.lang);

  // states
  const [editModal, setEditModal] = useState(false);
  const [lang, setLang] = useState<boolean>();
  const [theme, setTheme] = useState<boolean>();

  // variables
  const styles = customStyles(storeTheme);

  // method for open and close EditCities Modal
  const toogleModal = () => {
    setEditModal(!editModal);
  };

  // method for changing app language and theme
  const changeLang = () => setLang(prev => !prev);
  const changeTheme = () => setTheme(prev => !prev);

  // useEffects
  useEffect(() => {
    setLang(storeLang === 'en');
    setTheme(storeTheme === 'light');
  }, []);

  useEffect(() => {
    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en');
    dispatch(changeStoreLang(lang ? 'en' : 'tr'));
  }, [lang, dispatch]);

  useEffect(() => {
    dispatch(changeStoreTheme(theme ? 'light' : 'dark'));
  }, [theme, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Setting 
          title='PAGES.SETTINGS.SECTION_TITLES.LANGUAGE'
          switchValue={lang}
          onSwitchValueChange={changeLang}
          leftIconName={CUSTOM_ICON_LIST.TR}
          rightIconName={CUSTOM_ICON_LIST.UK}
          styles={styles}
          customIcon={true}
        />
        <Setting 
          title='PAGES.SETTINGS.SECTION_TITLES.THEME'
          switchValue={theme}
          onSwitchValueChange={changeTheme}
          leftIconName="light-down"
          rightIconName="light-up"
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
