import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {},
    containerBotao: {
        backgroundColor: "#22354F",
        position: "relative",
        width: 230,
        height: 230,
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 20,
        right: -200,
        bottom: -30,
        transform: [{ rotate: "45deg" }],
        borderColor: "#2D939C",
        borderRadius: 70,
        borderWidth: 3,
    },
    containerLogo: {
        marginTop: "3%",
        paddingHorizontal: "10%",
    },
});
