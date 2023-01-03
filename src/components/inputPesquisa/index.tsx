import React, { useState } from "react";
import { View, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

export const InputPesquisa = () => {
  return (
    <>

      <View style={styles.inputPesquisa}>
        <TouchableOpacity>
        <Image source={require('../../assets/icons/procurar.png')} style={styles.pesquisar} />
        </TouchableOpacity>
        <TextInput
          placeholder="Titulo, autor, ISBN ou usuário"
          style={styles.textoInput}
        />

      </View>
    </>
  )
}