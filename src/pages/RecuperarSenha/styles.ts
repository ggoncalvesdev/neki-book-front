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
        marginTop: "20%",
        paddingHorizontal: "10%",
    },
    containerTitulo: {
        marginVertical: "12%",
        alignItems: "center",
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
        marginTop: "13%",
        // marginBottom: "8%",
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
    containerBotao: {
        justifyContent: "center",
        width: "100%",
        top: 270,
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
        paddingRight: 20,
    },
    setaBotao: {
        resizeMode: "contain",
        marginTop: 10,
        tintColor: "#ffff",
        width: 20,
        height: 30,
    },
    textoBotao: {
        marginRight: "3%",
        marginTop: 10,
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
        color: "#212F44",
    },
    darkThemeText: {
        color: "#fff",
    },
});
