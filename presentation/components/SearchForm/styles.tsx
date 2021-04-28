import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 32,
        left: 20,
        right: 20,
        zIndex: 5,
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
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: '#0080ff80',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    }
});