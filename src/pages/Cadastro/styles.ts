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
    containerImput: {
        marginTop: 15,
        paddingHorizontal: 40,
    },
    containerBotao: {
        justifyContent: "center",
        width: "100%",
        top: 70,
    },
    containerTextoBotao: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        height: 150,
        paddingRight: 30,
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
    containerLogo: {
        marginTop: "3%",
        paddingHorizontal: "10%",
    },
    containerTitulo: {
        marginVertical: "12%",
        alignItems: "center",
    },
    containerHeader: {
        marginTop: "14%",
        marginBotton: "8%",
        paddingStart: "5%",
    },
    titulo: {
        textAlign: "center",
        fontSize: 39,
        fontWeight: "bold",
    },
    subTitulo: {
        textAlign: "center",
        fontSize: 16,
    },
    input: {
        backgroundColor: "#ffff",
        paddingVertical: "4%",
        marginBottom: "6%",
        borderRadius: 15,
        padding: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    eyevisible: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        right: 55,
        bottom: 97,
        width: 50,
    },
    textoLink: {
        color: "#211F1F",
        fontSize: 15,
        fontWeight: "bold",
    },
    lightContainer: {
        backgroundColor: "#fff",
    },
    darkContainer: {
        backgroundColor: "#211f1f",
    },
    lightThemeText: {
        color: "#212F44",
    },
    darkThemeText: {
        color: "#fff",
    },
});
