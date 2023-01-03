import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { styles } from "./styles";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Api } from "../../services/Api/api";
import { DataContext } from "../../context/DataContext";
import { DadosLivroType } from "../../models/DadosLivroType";

export function Results({ isbn }) {
    const navigation = useNavigation();
    const { dadosUsuarioLogin } = useContext(DataContext);
    const [book, setBook] = useState<DadosLivroType>();
    
    useEffect(() => {
        const loadBook = async () => {
            try {
                const response = await Api.get(
                    `/api/livros/consulta-livro/${isbn}`,
                    {
                        headers: {
                            "Authorization": `Bearer ${dadosUsuarioLogin?.token}`,
                        },
                    }
                ).then((resp) => {
                    setBook(resp.data);
                });
            } catch (e) {
                if (e.response && e.response.status === 404) {
                    console.info("ISBN não encontrado na base de dados.", e);
                    alert(
                        "Desculpe, este livro não foi encontrado na nossa base de dados."
                    );
                } else {
                    console.error("Erro ao recuperar os dados do servidor.", e);
                    alert(
                        "Erro ao recuperar os dados do servidor, por favor, tente mais tarde."
                    );
                }
            }
        };
        loadBook();
    }, [isbn]);

    return (
        <View>
            {book && (<>
                <View style={styles.wrapper}>
                    { book?.volumeInfo?.imageLinks?.thumbnail != null && 
                        <Image
                        style={styles.image}
                        source={{ uri: book?.volumeInfo.imageLinks.thumbnail }}
                        /> || 
                        <Image
                        style={styles.image}
                        source={require("../../assets/img/livrocapa.jpg")}
                        />
                    }
                    
                    <View style={styles.info}>
                        {book?.volumeInfo?.title == null &&
                            <Text style={styles.title}>Título: Não encontrado</Text> 
                        }
                        {book?.volumeInfo?.title != null &&
                            <Text style={styles.title}>{book?.volumeInfo?.title}</Text>
                        }
                        {book?.volumeInfo.authors == null &&
                            <Text style={styles.autor}>Autor: Não encontrado</Text> 
                        }
                        {book?.volumeInfo.authors != null &&
                            <Text style={styles.autor}>Autor: {book?.volumeInfo.authors[0]}</Text>
                        }
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("BookDetails", {
                                isbn: isbn,
                                dadosUsuario: dadosUsuarioLogin?.token,
                            });
                        }}
                        style={styles.containerButton}
                    >
                        <Image
                            source={require("../../assets/icons/seta-direita.png")}
                            style={styles.button}
                        ></Image>
                    </TouchableOpacity>
                </View>
                </>
            )}
        </View>
    );
}
Results.propTypes = {
    isbn: PropTypes.string.isRequired,
};
