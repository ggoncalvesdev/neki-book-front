import { StyleSheet, Dimensions } from "react-native";
import { RotationGesture } from "react-native-gesture-handler/lib/typescript/handlers/gestures/rotationGesture";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // position:"absolute"
    },
    imageBackground: {
        resizeMode: "repeat",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    imgperfil: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    containerImg: {
        marginTop:45,
        alignSelf: "center",
    },
    bordaImg: {
        borderColor: "#212F44",
        borderWidth: 1,
        borderRadius: 100,
        padding:3,
        alignItems: "center",
    },
    identificacao: {
        marginTop: 20,
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
    setor: {
        fontSize: 15,
        fontWeight: "bold",
        padding: 0,
        color: "#212F44",
    },
    userName: {
        color: "#212F44",
        marginBottom: 20,
    },
    adduser: {
        justifyContent: 'center',
        alignItems: "center",
    },
    imgAddUser: {
        width: 35,
        height: 35,
    },
    infos: {
        marginTop: 30,
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    historico: {
        flex: 0.2,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20,
        marginBottom: 0,
    },
    infotext: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "#212F44",
    },
    infonum: {
        marginTop: 0,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "#2D939C",
    },
    history: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#212F44",
    },
    imagens: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 50,
    },
    imgLivros: {
        width: 140,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    cardLivro: {
        marginHorizontal: 8,
        padding: 10,
        justifyContent: "center",
        display: "flex",
        width: 350,
        textAlign: "justify",
        alignSelf: "center",
        marginTop: 20,
    },
    imgItem: {
        width: 180,
        height: 240,
        alignItems: "stretch",
        alignSelf: "center",
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
