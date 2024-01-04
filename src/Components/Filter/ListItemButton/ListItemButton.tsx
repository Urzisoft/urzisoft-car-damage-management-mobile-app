import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './ListItemButton.style';
import RenderTabIcon from '../../../Utils/RenderTabIcon';

type ListItemButtonProps = {
    active?: boolean;
    onPress?: () => void;
    text: string;
    icon?: any;
};

const ListItemButton: React.FC<ListItemButtonProps> = ({ active, onPress, text, icon }) => {
    const buttonStyle = StyleSheet.compose(styles.button, active && styles.buttonActive);

    const textStyle = StyleSheet.compose(styles.text, active && styles.textActive);

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={() => {
                onPress && onPress();
            }}
        >
            <View style={styles.container}>
                {icon && RenderTabIcon(25, 25, '#fff', icon)}
                <Text numberOfLines={1} ellipsizeMode="clip" style={textStyle}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ListItemButton;
