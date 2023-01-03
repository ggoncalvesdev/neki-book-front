import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    padding: 15,
    width: '100%',
    
},
inputPesquisa: {
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
    marginLeft: 10,
},
pesquisar: {
    resizeMode: 'stretch',
    alignItems: 'center',
},

})