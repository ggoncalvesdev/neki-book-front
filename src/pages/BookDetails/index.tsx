import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { DadosLivroType } from "../../models/DadosLivroType";
import { Api } from "../../services/Api/api";
import { Info } from "./Info";
import { styles } from "./styles";

export function BookDetails({ route }) {
    const navigation = useNavigation();
    const [book, setBook] = useState<DadosLivroType>();
    const [isbn, setIsbn] = useState(route.params?.isbn);
    const [dadosUsuario, setDadosUsuario] = useState(
        route.params?.dadosUsuario
    );

    console.log(`ISBN: ${isbn}`);
    console.log(`dadosUsuario: ${dadosUsuario}`);

    useEffect(() => {
        const loadBook = async () => {
            try {
                const response = await Api.get(
                    `/api/livros/consulta-livro/${route.params?.isbn}`,
                    {
                        headers: {
                            Authorization: `Bearer ${route.params?.dadosUsuario}`,
                        },
                    }
                ).then((resp) => {
                    setBook(resp.data);
                });
            } catch (e) {
                if (e.resp && e.resp.status === 404) {
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
        <>
            <View style={styles.container}>
                <Info
                    book={book}
                    isbn={isbn}
                    dadosUsuario={dadosUsuario}
                    navigation={navigation}
                />
            </View>
        </>
    );
}
