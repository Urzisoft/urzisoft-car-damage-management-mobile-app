import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SortByIcon from '../../Assets/Icons/sort-by-icon.svg';
import ListItemButton from '../ListItemButton/ListItemButton';
import styles from './StickyListItemButton.style';

const Icon = () => (
    <View style={styles.icon}>
        <SortByIcon />
    </View>
);

const StickyItemButton = () => <ListItemButton text="Filters" icon={Icon} />;

export default StickyItemButton;
