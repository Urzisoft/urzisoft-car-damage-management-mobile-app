import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';

const FILTERS_ICON_WIDTH = 44;
const FILTERS_BUTTON_WIDTH = 100;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        paddingLeft: 10,
        backgroundColor: Colors.GREY,
    },
    stickyItem: {
        paddingTop: 10,
        position: 'absolute',
        zIndex: 1,
        left: 10,
        paddingRight: 8,
        backgroundColor: Colors.GREY,
    },
    stickyItemMask: {
        minWidth: FILTERS_ICON_WIDTH,
        marginLeft: -8,
        borderRadius: 8,
        overflow: 'hidden',
    },
    scrollView: {
        marginLeft: 10,
    },
    scrollViewContent: {
        paddingLeft: 100,
        paddingRight: 10,
        paddingBottom: 13,
    },
    dropDownIcon: {
        marginRight: 6,
    },
});

export default styles;
