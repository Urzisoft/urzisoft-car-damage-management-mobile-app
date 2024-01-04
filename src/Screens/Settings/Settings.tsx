import { SafeAreaView } from 'react-native';
import React from 'react';
import { useAuth } from '../../Hooks/useAuth';
import ChooseImageButton from '../../Components/ChooseImageButton/ChooseImageButton';
import styles from './Settings.style';

const Settings = () => {
    const { logUserOut } = useAuth();

    const handleLogout = () => {
        logUserOut();
    };

    return (
        <SafeAreaView style={styles.rootContainer}>
            <ChooseImageButton title={'Logout'} onPress={handleLogout} />
        </SafeAreaView>
    );
};

export default Settings;
