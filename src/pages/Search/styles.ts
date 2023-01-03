import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageBackground: {
        resizeMode: "repeat",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    containerInput: {
        marginBottom: 10,
    },
    input: {
        backgroundColor: "#ffff",
        width: 350,
        alignSelf: "center",
        paddingVertical: 15,
        marginTop: 50,
        marginBottom: 0,
        borderRadius: 15,
        paddingLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    containerText: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#ffff",
        width: 250,
        paddingVertical: 20,
        marginTop: 20,
        borderColor: "#000000",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    text: {
        textAlign: "center",
    },
    cardBook: {
        paddingTop: 5,
        width: 370,
        alignSelf: "center",
    },
    cardBookBorder: {
        justifyContent: "space-around",
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: "#212F44",
        borderRadius: 7,
    },
    imgItem: {
        alignSelf: "center",
        width: 65,
        height: 90,
        borderWidth: 1,
        borderColor: "#212F44",
        borderRadius: 7,
    },
    cardBookTitle: {
        justifyContent: "center",
        padding: 10,
        width: 250,
        marginLeft: 10,
    },
    cardBookName: {
        justifyContent: "center",
        textAlign: "center",
        fontSize: 16,
        bottom: 15,
        color: "#2D939C",
    },
    cardBookAutor: {
        textAlign: "center",
        fontSize: 16,
        color: "#252525",
    },
    lightContainer: {
      backgroundColor: "#fff",
    },
    darkContainer: {
      backgroundColor: "#211f1f",
    },
    lightThemeText: {
      color: "#2a8894",
    },
    darkThemeText: {
      color: "#fff",
    },
});
