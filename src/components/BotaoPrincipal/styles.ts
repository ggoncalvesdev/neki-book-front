import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
    botao: {
        marginTop: 14,
        alignSelf: "center",
    },
    containerTextoBotao: {
        flexDirection: "row",
        transform: [{ rotate: "315deg" }],
        alignItems: "center",
        marginBottom: "20%",
        marginRight: "20%",
        paddingVertical: "8%",
        paddingHorizontal: "10%",
    },
    setaBotao: {
        resizeMode: "contain",
        marginTop: "15%",
        tintColor: "#ffff",
        width: 16,
        height: 16,
    },
    textoBotao: {
        paddingLeft: "3%",
        marginRight: 6,
        marginTop: 6,
        color: "#fff",
        fontSize: 20,
    },
});
