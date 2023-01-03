import React from "react";
import PropTypes from "prop-types";
import { styles } from "./styles";
import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Api } from "../../../services/Api/api";
import { ScrollView } from "react-native-gesture-handler";

export const Info = ({ book, isbn, dadosUsuario, navigation }) => {
  console.log(`ISBN: ${isbn}`);
  console.log(`dadosUsuario: ${dadosUsuario}`);

    const postLivro = async () => {
        try {
            const get = await Api.get(`/api/livros/isbn/${isbn}`, {
                headers: { Authorization: `Bearer ${dadosUsuario}` },
            }).then((resp) => {
                console.log(JSON.stringify(resp.data));
                console.log(resp.status);
                if (resp.status === 201) {
                    console.info("Livro cadastrado no banco de dados.");
                    alert("Parabéns, seu livro foi cadastrado com sucesso!");
                }
            });
        } catch {
            console.log(Error);
        }
    };

    return (
        <>
            <ImageBackground
                source={require("../../../assets/img/fundoHome.png")}
                style={styles.imageBackground}
            >
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.wrapper}>
                            {(book?.volumeInfo?.imageLinks?.thumbnail !=
                                null && (
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: book?.volumeInfo.imageLinks
                                            .thumbnail,
                                    }}
                                />
                            )) || (
                                <Image
                                    style={styles.image}
                                    source={require("../../../assets/img/livrocapa.jpg")}
                                />
                            )}

                            <View style={styles.info}>
                                {book?.volumeInfo?.title == null ? (
                                    <Text style={styles.title}>
                                        Título: Não encontrado
                                    </Text>
                                ) : (
                                    <Text style={styles.title}>
                                        {book?.volumeInfo?.title}
                                    </Text>
                                )}
                                {book?.volumeInfo?.subtitle == null ? (
                                    <Text style={styles.subTitle}>
                                        SubTítulo: Não encontrado
                                    </Text>
                                ) : (
                                    <Text style={styles.subTitle}>
                                        {book?.volumeInfo?.subtitle}
                                    </Text>
                                )}
                                {book?.volumeInfo.authors == null ? (
                                    <Text style={styles.autor}>
                                        Autor: Não encontrado
                                    </Text>
                                ) : (
                                    <Text style={styles.autor}>
                                        Autor: {book?.volumeInfo.authors[0]}
                                    </Text>
                                )}
                                {book?.volumeInfo?.categories == null ? (
                                    <Text style={styles.categoria}>
                                        Categoria: Não encontrada.{" "}
                                    </Text>
                                ) : (
                                    <Text style={styles.categoria}>
                                        Categoria:{" "}
                                        {book?.volumeInfo?.categories[0]}
                                    </Text>
                                )}
                                {book?.volumeInfo?.publisher == null ? (
                                    <Text style={styles.editora}>
                                        Editora: Não encontrada
                                    </Text>
                                ) : (
                                    <Text style={styles.editora}>
                                        Editora: {book?.volumeInfo?.publisher}
                                    </Text>
                                )}
                                {book?.volumeInfo?.publishedDate == null ? (
                                    <Text style={styles.dataPublicacao}>
                                        Data de Publicação: Não encontrada
                                    </Text>
                                ) : (
                                    <Text style={styles.dataPublicacao}>
                                        Data de Publicação:{" "}
                                        {book?.volumeInfo?.publishedDate}
                                    </Text>
                                )}
                                {book?.volumeInfo?.pageCount == null ? (
                                    <Text style={styles.page}>
                                        Quantidade de Páginas: Não encontrada
                                    </Text>
                                ) : (
                                    <Text style={styles.page}>
                                        Quantidade de Páginas:{" "}
                                        {book?.volumeInfo?.pageCount} páginas
                                    </Text>
                                )}
                                {book?.volumeInfo?.description == null ? (
                                    <Text style={styles.description}>
                                        Descrição: Não encontrada
                                    </Text>
                                ) : (
                                    <Text style={styles.description}>
                                        Descrição:{" "}
                                        {book?.volumeInfo?.description}
                                    </Text>
                                )}
                            </View>
                            <View style={styles.displayButton}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("Home")}
                                    style={styles.containerButton}
                                    accessibilityLabel="Botão cancelar."
                                    accessibilityHint="Não é o o livro que estava procurando? Clique aqui para cancelar."
                                >
                                    <Text style={styles.button}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate("Home"),
                                            postLivro();
                                    }}
                                    style={styles.containerButton}
                                    accessibilityLabel="Botão cadastrar."
                                    accessibilityHint="Esse é o livro que estava procurando? Clique aqui para adicioná-lo na sua lista."
                                >
                                    <Text style={styles.button}>Cadastrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </>
    );
};

Info.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
