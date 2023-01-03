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
    cardUser: {
        flexDirection: "row",
        alignSelf: "center",
        textAlign: "center",
        width: 380,
        padding: 10,
        marginVertical: 20,
    },
    cardUserImageBorder: {
        borderColor: "#212F44",
        borderWidth: 1,
        borderRadius: 50,
    },
    cardUserImage: {
        width: 80,
        height: 80,
        margin: 2,
        borderRadius: 50,
    },
    cardUserTitle: {
        alignSelf: "center",
        marginLeft: 10,
    },
    cardUserName: {
        lineHeight: 30,
        fontSize: 16,
        fontWeight: "bold",
    },
    cardUserEmail: {
        fontSize: 14,
        color: "#BBBBBB",
    },
    imagens: {
        justifyContent: "space-around",
        marginBottom: 60,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 150,
    },
    imgperfil: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    input: {
        alignSelf: "center",
        width: 350,
        backgroundColor: "#ffff",
        paddingVertical: 15,
        paddingLeft: 20,
        marginTop: 50,
        marginBottom: 0,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

    elevation: 16,
  },
  foto: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 0,
  },
  identificacao: {
    marginTop: 15,
    padding: 0,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  Nome: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#000",
    padding: 0,
  },
  containerText: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ffff",
    width: 250,
    paddingVertical: 20,
    marginTop: 40,
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
  userName: {
    marginBottom: 30,
  },
  infos: {
    marginTop: 50,
    paddingRight: 25,
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  infos2: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  historico: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    marginBottom: 20,
  },
  infotext: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
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
    color: "#2D939C",
  },
  status: {
    marginTop: 2,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: "bold",

    color: "#252525",
  },
  imgLivros: {
    width: 140,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  livrohist: {
    marginRight: 20,
    backgroundColor: "#6cc1d4cd",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
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
  }
});
