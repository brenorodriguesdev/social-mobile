import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF"
    },
    input: {
        width: 250,
        backgroundColor: "#fff",
        marginBottom: 16,
    },
    button: {
        height: 40, backgroundColor: "#0080ff",
        justifyContent: "center", alignItems: "center",
        borderRadius: 5, width: 250, marginBottom: 8
    },
    textButton: {
        fontWeight: "bold",
        color: "white"
    }
});