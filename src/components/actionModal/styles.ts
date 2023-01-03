import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginVertical: 85,
        marginLeft: 10,
        marginRight: 10,
    },
    actionButton: {
        zIndex: 99,
        flexDirection: "row",
        backgroundColor: "#2a8894",
        borderRadius: 15,
        padding: 8,
        borderWidth: 1,
        borderColor: "rgba(0,0,0, 0.2)",

        shadowColor: "rgba(0,0,0, 0.2)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
        shadowOpacity: 0.28,
        shadowRadius: 4,
    },
    actionText: {
        textAlign: "center",
        alignSelf: "center",
        marginLeft: 20,
    },
    imgButton: {
        width: 50,
        height: 50,
    },
});
