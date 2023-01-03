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
    containerImg: {
        marginTop:45,
        alignSelf: "center",
    },
    bordaImg: {
        borderColor: "#212F44",
        borderWidth: 1,
        borderRadius: 100,
        alignItems: "center",
    },
    imgperfil: {
        width: 100,
        height: 100,
        margin: 2,
        borderRadius: 50,
    },
    identificacao: {
        marginTop: 35,
        padding: 0,
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
    },
    nome: {
        fontSize: 23,
        fontWeight: "bold",
        padding: 0,
        color: "#212F44",
    },
    userName: {
        color: "#212F44",
        marginBottom: 30,
    },
    infos: {
        /* marginTop: 10, */
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    infotext: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "#212F44",
    },
    history: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "#212F44",
    },
    imagens: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:45
    },
    imgLivros: {
        width: 140,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    status: {
        marginTop: 2,
        borderRadius: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: "#252525",
    },
    livrohist: {
        backgroundColor: "#2a88949b",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
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
