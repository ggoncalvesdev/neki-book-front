import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground,
  TextInput,
  FlatList,
  useColorScheme,
} from "react-native";
import { styles } from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { DadosLivroLocalType } from "../../models/DadosLivroLocalType";
import { DataContext } from "../../context/DataContext";
import { Api } from "../../services/Api/api";

export function Search({ navigation }) {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const [input, setInput] = useState("");
  const [data, setData] = useState<DadosLivroLocalType[]>([]);

  const { dadosUsuarioLogin } = useContext(DataContext);

  const navigateToLivro = (idLivro: any) => {
    navigation.navigate("PageLivro", { idLivro: idLivro });
  };

  const getBook = async () => {
    try {
      const get = await Api.get(`/api/livros/nome/${input}`, {
        headers: {
          Authorization: `Bearer ${dadosUsuarioLogin?.token}`,
        },
      }).then((resp) => {
        setData(resp.data);
        console.log(JSON.stringify("retorno api: " + JSON.stringify(data)));
      });
    } catch (error) {}
  };

  const onChangeText = async (text: string) => {
    console.log(text);
    try {
      setInput(text);
      if (text.length > 1) {
        getBook();
      } else {
        setData([]);
      }
    } catch (error) {}
  };

  const CardBook = ({ item }) => {
    return (
      <>
        <TouchableOpacity onPress={() => navigateToLivro(item?.idLivro)}>
          <View style={styles.cardBook}>
            <View style={[styles.cardBookBorder,themeContainerStyle]}>
              {item?.imagem != null ? (
                <Image style={styles.imgItem} source={{ uri: item?.imagem }} />
              ) : (
                <Image
                  style={styles.imgItem}
                  source={require("../../assets/img/livrocapa.jpg")}
                />
              )}
              <View style={styles.cardBookTitle}>
                {item?.nomeLivro != null ? (
                  <Text style={[styles.cardBookName,, themeTextStyle]}>{item?.nomeLivro}</Text>
                ) : (
                  <Text style={[styles.cardBookName, themeTextStyle]}>Título não encontrado</Text>
                )}
                {item.autor != null ? (
                  <Text style={[styles.cardBookAutor,, themeTextStyle]}>Autor: {item?.autor}</Text>
                ) : (
                  <Text style={[styles.cardBookAutor, themeTextStyle]}>Autor não encontrado</Text>
                )}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View>
      <ImageBackground
        source={require("../../assets/img/fundoHome.png")}
        style={[styles.imageBackground, themeContainerStyle]}
      >
        <View style={styles.containerInput}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={input}
            placeholder="Digite o nome do livro..."
            onChangeText={onChangeText}
            style={styles.input}
            accessibilityLabel="Caixa de pesquisa."
            accessibilityHint="Clique aqui para digitar o nome de um livro desejado."
          />
          {data[0] != null && (
            <FlatList
              data={data}
              renderItem={CardBook}
              keyExtractor={(item) => item?.idLivro}
            />
          )}
          {input != "" && data[0] == null ? (
            <>
              <View style={styles.containerText}>
                <Text style={styles.text}>Livro não encontrado!{"\n"} Que tal cadastra-lo?</Text>
                <MaterialIcons
                  name="mood-bad"
                  size={38}
                  color="black"
                  top={0}
                />
              </View>
            </>
          ) : (
            <></>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}
