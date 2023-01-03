import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#ffffff49",
       flexDirection: "row",
       alignItems: "center",
       bottom:0,
    },
    image: {
        width: 90,
        height: 120,
        marginTop:8,
        marginLeft:8,
        marginBottom:8
    },
    info: {
        width: 180,
        marginLeft:10,
    },
    title: {
        fontSize: 16,
        marginBottom: 20,
        fontWeight: "bold",
    },
    autor: {
        fontSize: 15,
    },
    bookRating: {},
    containerButton: {
        marginLeft:60,
        backgroundColor: "#2a8894",
        borderRadius: 5,
    },
    button: {
        tintColor: "#fff",
        width: 45,
        height: 45,
    },
});
