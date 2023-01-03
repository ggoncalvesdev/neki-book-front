import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        resizeMode: "repeat",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    containerLogo: {
        alignItems: "center",
    },
    logoNekiBook: {
        width: 300,
        height: 300,
    },
    containerTitulo: {
        marginVertical: 100,
        alignItems: "center",
        marginBottom: 60,
    },
    titulo: {
        textAlign: "center",
        color: "#212F44",
        fontSize: 39,
        fontWeight: "bold",
    },
    subTitulo: {
        fontSize: 16,
        color: "#212F44",
    },
    containerBotao: {
        justifyContent: "center",
        width: "100%",
        top: 150,
    },
    containerTextoBotao: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        height: 150,
        paddingRight: 40,
    },
    setaBotao: {
        resizeMode: "contain",
        marginTop: 4,
        tintColor: "#fff",
        width: 15,
    },
    textoBotao: {
        marginRight: 8,
        color: "#fff",
        fontSize: 20,
    },
    lightContainer: {
        backgroundColor: "#fff",
    },
    darkContainer: {
        backgroundColor: "#211f1f",
    },
    lightThemeText: {
        color: "#22354f",
    },
    darkThemeText: {
        color: "#fff",
    },
});
