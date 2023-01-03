import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1
    },inputPesquisa: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#ffff",
        width: 355,
        paddingVertical: 10,
        borderRadius: 15,
        paddingRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    textoInput: {
        width: 250,
        marginLeft: 30,
    },
    pesquisar: {
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    barra:{
        marginTop:10,
        marginLeft:20
    },
    book:{
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
    infos:{
        marginTop:20,
        justifyContent:'center',
        alignItems:"center",
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color:'#22354F'
    },
    author: {
        fontSize: 15,
        color:'#22354F',
        marginTop: 10,
        marginBottom:10
    },
    imgBook:{
        width: 330,
        height: 450,
        borderRadius: 25,
        marginTop: 25,
    },
    contButton:{
        justifyContent:'center',
        alignItems:"center",
    },
    button:{
        marginTop:30,
        backgroundColor: '#2a8894',
        width:150,
        borderRadius:25,
    },
    txtButton:{
        color:'white'

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