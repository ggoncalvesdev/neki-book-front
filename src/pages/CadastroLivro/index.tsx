import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  useColorScheme,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { DataContext } from "../../context/DataContext";
import { Api } from "../../services/Api/api";
import {
  NavigationHelpersContext,
  useNavigation,
} from "@react-navigation/native";
import { styles } from "./styles";

import { Button, Card } from "react-native-paper";
import { DadosLivroType } from "../../models/DadosLivroType";
import Alerta from "../../components/Alerta";

export function CadastroLivro() {

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
    
  const navigation = useNavigation();
  const { dadosUsuarioLogin } = useContext(DataContext);
  const [dadosLivro, setDadosLivro] = useState<DadosLivroType>();

  const [isbnLivro, setIsbnLivro] = useState("");

  const getLivros = async () => {
    try {
      const get = await Api.get(`/api/livros/consulta-livro/${isbnLivro}`, {
        headers: {
          Authorization: `Bearer ${dadosUsuarioLogin?.token}`,
        },
      }).then((resp) => {
        console.log(" POST LIVROS AQUI :" + JSON.stringify(resp.data));
        setDadosLivro(resp.data);
      });
    } catch {
      console.log(Error);
    }
  };

  const postLivros = async () => {
    try {
      const get = await Api.get(`/api/livros/isbn/${isbnLivro}`, {
        headers: {
          Authorization: `Bearer ${dadosUsuarioLogin?.token}`,
        },
      }).then((resp) => {
        console.log(JSON.stringify(resp.data));
        Alerta("Parabéns!", "O seu livro foi cadastrado com sucesso");
      });
    } catch {
      console.log(Error);
    }
  };

  return (
    <>
      <SafeAreaView style={[{flex: 1}, themeContainerStyle]}>
        <View style={styles.barra}>
          <View style={styles.inputPesquisa}>
            <TouchableOpacity
              onPress={() => {
                getLivros();
              }}
              accessibilityLabel="Barra de pesquisa."
              accessibilityHint="Quer procurar um livro? Clique aqui."
            >
              <Image
                source={require("../../assets/icons/procurar.png")}
                style={styles.pesquisar}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Titulo ou ISBN"
              style={styles.textoInput}
              onChangeText={(value) => {
                setIsbnLivro(value);
              }}
            />
          </View>
        </View>

        <View style={styles.book}>
          {(dadosLivro?.volumeInfo?.imageLinks?.thumbnail != null && (
            <Image
              style={styles.imgBook}
              source={{
                uri: dadosLivro?.volumeInfo.imageLinks.thumbnail,
              }}
            />
          )) || (
            <Image
              style={styles.imgBook}
              source={require("../../assets/img/livrocapa.jpg")}
            />
          )}
        </View>
        <View style={styles.infos}>
          <Text style={[styles.title, themeTextStyle]}>{dadosLivro?.volumeInfo.title}</Text>
          <Text style={[styles.author, themeTextStyle]}>{dadosLivro?.volumeInfo.authors[0]}</Text>
          <Text style={[styles.author, themeTextStyle]}>{dadosLivro?.volumeInfo.categories}</Text>
        </View>
        <View style={styles.contButton}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                postLivros(), navigation.navigate("Home");
              }}
              accessibilityLabel="Botão para salvar."
              accessibilityHint="É o livro que estava procurando? Clique aqui para salvar."
            >
              <Button>
                <Text style={styles.txtButton}>Salvar</Text>
              </Button>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
