// Import React
import { ReactElement, useEffect } from 'react';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';

// Import i18n
import i18n from "../common/locales/i18n";

// Import Navigation
import { useRoute } from '@react-navigation/native';

// Import Store
import { useAppSelector } from '../store/hooks';

// Header
import Header from './header/Header';

// Footer
import Footer from "./footer/Footer"

// Import Background
import Background from '../components/background/Background';

// styles
import styles from '../assets/styles/layout.style';

interface ILayoutProps {
    children: ReactElement;
}

function Layout(props: ILayoutProps): JSX.Element {

    // destruct props
    const { children } = props;

    // variables
    const lang = useAppSelector(state => state.weather.lang);
    const route = useRoute();

    useEffect(() => {
        if(route.name === 'home') {
            i18n.changeLanguage(lang === 'en' ? 'en' : 'tr');
        }
    }, []);

    return (
        <Background>
            <SafeAreaView style={styles.main}>
                <Header />
                <KeyboardAvoidingView>{children}</KeyboardAvoidingView>
                <Footer />
            </SafeAreaView>
        </Background>
    )
}

export default Layout;