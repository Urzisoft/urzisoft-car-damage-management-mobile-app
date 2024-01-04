import { StyleSheet } from 'react-native';
import Colors from '../../../Utils/Colors';

const styles = StyleSheet.create({
    button: {
        marginLeft: 8,
        borderRadius: 8,
        backgroundColor: Colors.RED,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 32,
        paddingHorizontal: 12,
        marginLeft: -6,
        marginRight: 7,
    },
    buttonActive: {
        marginLeft: 8,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
    },
    text: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.WHITE,
        marginLeft: 5,
    },
    textActive: {
        color: Colors.BLACK,
    },
});

export default styles;
