// Import React
import { ReactElement } from 'react';
import { SafeAreaView, KeyboardAvoidingView } from 'react-native';

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