import {
    StyleSheet,
} from 'react-native';

import { Dimensions } from 'react-native';


export default StyleSheet.create({
    container: {
        marginTop: 36,
        width: Dimensions.get('window').width * 95 / 100,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        marginBottom: 12
    },
    inputOnKeyboard: {
        flex: 1,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        marginBottom: 256
    }
});