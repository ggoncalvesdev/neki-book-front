import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        resizeMode: "repeat",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    containerImput: {
        marginTop: 75,
        paddingHorizontal: 40,
    },
    containerTitulo: {
        marginVertical: 60,
        alignItems: "center",
        marginBottom: 30,
    },
    titulo: {
        textAlign: "center",
        color: "#212F44",
        fontSize: 39,
        fontWeight: "bold",
    },
    subTitulo: {
        textAlign: "center",
        fontSize: 16,
        color: "#212F44",
    },
    input: {
        backgroundColor: "#ffff",
        paddingVertical: "4%",
        marginBottom: "8%",
        borderRadius: 15,
        paddingLeft: "10%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    textoLink: {
        fontSize: 15,
        fontWeight: "bold",
    },
    containerBotao: {
        justifyContent: "center",
        width: "100%",
        top: 175,
    },
    botao: {
        alignSelf: "center",
        marginBottom: "2%",
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
