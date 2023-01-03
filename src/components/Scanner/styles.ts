import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    scanner: {
        width: "200%",
        flex: 2,
    },
    scanMarker: {
        position: "absolute",
        tintColor: "#2a8894",
        width: 400,
        height: 400,
    },
    textScanMarker: {
        position: "absolute",
        color: "#2a8894",
        top: 145,
        fontSize: 14,
        fontStyle: "italic",
    },
    logo: {
        position: "absolute",
        width: 137,
        height: 137,
        bottom: 30,
    },
    button:{
        backgroundColor: "#2a8894",
        padding:6,
    }
});
