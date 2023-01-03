import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    imageBackground: {
        resizeMode: "repeat",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    wrapper: {
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    image: {
        width: 160,
        height: 235,
        marginTop: 10,
        marginBottom: 100,
        borderRadius: 5,
    },
    info: {
        flexDirection: "column",
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 2,
        fontWeight: "bold",
        color: "#212F44",
    },
    subTitle: {
        fontSize: 18,
        textAlign: "center",
        margin: 15,
        color: "#212F44",
    },
    autor: {
        fontSize: 16,
        marginBottom: 10,
        color: "#252525",
    },
    categoria: {
        marginBottom: 10,
        color: "#252525",
    },
    editora: {
        marginBottom: 10,
        color: "#252525",
    },
    dataPublicacao: {
        marginBottom: 10,
        color: "#252525",
    },
    description: {
        fontSize: 14,
        textAlign: "justify",
        color: "#252525",
    },
    page: {
        marginBottom: 10,
        color: "#252525",
    },
    displayButton: {
        flex: 2,
        flexDirection: "row",
    },
    containerButton: {
        backgroundColor: "#4FB889",
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginHorizontal: 60,
        marginVertical: 40,
        borderRadius: 30,
    },
    button: {
        textAlign: "center",
        paddingTop: 11,
        width: 95,
        height: 45,
        color: "#fff",
        fontWeight: "bold",
    },
});
