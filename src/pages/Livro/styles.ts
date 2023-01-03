import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    historico:{
        flex:0.2,
        marginLeft: 20,
        justifyContent:'flex-start',
        paddingTop:20,
    },
    history:{
        fontSize: 35,
        fontWeight: 'bold',
        color:'#22354F'
    },
    livro:{
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        justifyContent:'center',
        alignItems:"center",
    },
    imgLivros:{
        width: 380,
        height: 400,
        borderRadius: 25,
        marginTop: 25,
    },
    textLivro: {
        padding: 20,
        alignItems: 'center',
    },
    textoLivro: {
        fontSize: 15,
        color:'#22354F',
        marginTop: 10,
    },
    inputAddLivro: {
        flex: 1,
        width: "80%",
        height: "30%",
        padding: 20,
        backgroundColor: '#2a8894',
        borderRadius: 8,
        justifyContent:"center",
        alignItems:"center",
    },
    inputAddLivroText: {
        color: "#fff"
    },
    textAddLivro: {
        color: '#fff',
        textAlign: 'center'
    },
    resenha: {
        justifyContent:"center",
        alignItems:"center",
    },
    textResenha: {
        fontSize: 20,
        color:'#22354F',
        marginTop: 10,
        padding: 20,
    },
    inputComentario: {
        flexDirection: 'row',
        backgroundColor: "#ffff",
        width: 355,
        paddingVertical: 10,
        borderRadius: 25,
        paddingRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    Input: {
        marginLeft: 40,
        width: '60%'
    },
    comentario: {
        flex: 1 ,
        direction: 'rtl',
    },
    iconeComentario: {
        height: 58,
        width: 58,
        borderRadius: 23,
        backgroundColor: "#21354E",
        transform: [{ rotate: "45deg" }],
        justifyContent: "center",
        alignItems: "center",
        
      },
      iconeInput: {

        tintColor: "#fff",
        width: 25,
        height: 25,
        transform: [{ rotate: "-45deg" }],
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
})