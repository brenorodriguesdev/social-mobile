import {
    StyleSheet,
} from 'react-native';

import { Dimensions } from 'react-native';


export default StyleSheet.create({
    container: {
        marginTop: 12,
        width: Dimensions.get('window').width * 95 / 100,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2
    }
});