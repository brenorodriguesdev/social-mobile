import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({
    button: {
        height: 40, backgroundColor: "#0080ff",
        justifyContent: "center", alignItems: "center",
        borderRadius: 5, width: 250, marginBottom: 8
    },
    buttonDisabled: {
        height: 40, backgroundColor: "#0080ff80",
        justifyContent: "center", alignItems: "center",
        borderRadius: 5, width: 250, marginBottom: 8
    },
    textButton: {
        fontWeight: "bold",
        color: "white"
    }
});