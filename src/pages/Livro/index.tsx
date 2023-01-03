import React, { useContext, useEffect, useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputPesquisa } from "../../components/inputPesquisa";
import { styles } from "./styles";
import SelectDropdown from "react-native-select-dropdown";
import { Api } from "../../services/Api/api";
import { DataContext } from "../../context/DataContext";
import { DadosLivroLocalType } from "../../models/DadosLivroLocalType";
import { SummaryType } from "../../models/SummaryType";
import { DadosLeituraType } from "../../models/DadosLeituraType";
import Alerta from "../../components/Alerta";

export function PageLivro({ route, navigation }) {
    const idLivro = route.params?.idLivro;
    const usuarioSelecionado = route.params?.friends;

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

    // const [visibalModal, setVisibalModal] = useState(false);
    const reading = ["DESEJADO", "LENDO", "LIDO"];
    const [dadosLivroLocal, setDadosLivroLocal] = useState<DadosLivroLocalType>();
    const [dadosLeitura, setDadosLeitura] = useState<DadosLeituraType>();
    const [dadosSummary, setDadosSummary] = useState<SummaryType>();
    const { dadosUsuarioLogin } = useContext(DataContext);
    // const [summaryReview, setSummaryReview] = useState<SummaryType>();

    const [summary, setSummary] = useState(null);

    const [status, setStatus] = useState("");
    const [listaLivros, setListaLivros] = useState([]);

    const getDadosLivro = async () => {
        if (usuarioSelecionado != null) {
            if (idLivro > 0) {
                try {
                    const getLivro = await Api.get(`/api/livros/${idLivro}`, {
                        headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` },
                    });
                    if (getLivro.data) {
                        setDadosLivroLocal(getLivro.data);
                        console.log("RESPOSTA GET livro:          " + JSON.stringify(getLivro.data));

                        try {
                            const getLeitura = await Api.get(
                                `/api/leitura/livro/${idLivro}/usuario/${usuarioSelecionado?.id}`,
                                {
                                    headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` },
                                }
                            );

                            if (getLeitura.data) {
                                setDadosLeitura(getLeitura.data);
                                console.log("RESPOSTA GET LEITURA:          " + JSON.stringify(getLeitura.data));

                                try {
                                    const getSummary = await Api.get(
                                        `api/summary/leitura/${getLeitura.data.idLeitura}/usuario/${usuarioSelecionado?.id}`,
                                        {
                                            headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` },
                                        }
                                    );
                                    console.log(
                                        "VALOR ID USUARIO SELECIONADO:            " + JSON.stringify(getSummary)
                                    );
                                    if (getSummary.data) {
                                        setDadosSummary(getSummary.data);
                                        console.log(
                                            "RESPOSTA GET SUMMARY:          " + JSON.stringify(getSummary.data)
                                        );
                                    }
                                } catch (error) {
                                    console.log("ERRO DO TRY GET SUMMARY:        " + error);
                                }
                            }
                        } catch (error) {
                            console.log("ERRO DO TRY GET LEITURA:        " + error);
                        }
                    }
                } catch (error) {
                    console.log("ERRO DO TRY GET LIVRO:        " + error);
                }
            }
        } else {
            if (idLivro > 0) {
                try {
                    const getLivro = await Api.get(`/api/livros/${idLivro}`, {
                        headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` },
                    });
                    if (getLivro.data) {
                        setDadosLivroLocal(getLivro.data);
                        console.log("RESPOSTA GET livro:          " + JSON.stringify(getLivro.data));

                        try {
                            const getLeitura = await Api.get(
                                `/api/leitura/livro/${idLivro}/usuario/${dadosUsuarioLogin?.id}`,
                                {
                                    headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` },
                                }
                            );
                            if (getLeitura.data) {
                                setDadosLeitura(getLeitura.data);
                                console.log("RESPOSTA GET LEITURA:          " + JSON.stringify(getLeitura.data));

                                try {
                                    const getSummary = await Api.get(
                                        `api/summary/leitura/${getLeitura.data.idLeitura}/usuario/${dadosUsuarioLogin?.id}`,
                                        {
                                            headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` },
                                        }
                                    );
                                    if (getSummary.data) {
                                        setDadosSummary(getSummary.data);
                                        console.log(
                                            "RESPOSTA GET SUMMARY:          " + JSON.stringify(getSummary.data)
                                        );
                                    }
                                } catch (error) {
                                    console.log("ERRO DO TRY GET SUMMARY:        " + error);
                                }
                            }
                        } catch (error) {
                            console.log("ERRO DO TRY GET LEITURA:        " + error);
                        }
                    }
                } catch (error) {
                    console.log("ERRO DO TRY GET LIVRO:        " + error);
                }
            }
        }
    };

    useEffect(() => {
        getDadosLivro();
        getLivrosByUsuario();
        // console.log(JSON.stringify("USUARIO SELECIONADO:             " + JSON.stringify(usuarioSelecionado?.id)));
    }, []);

    const postLeitura = async (e) => {
        await Api.post(
            `/api/leitura`,
            {
                usuarios: {
                    id: dadosUsuarioLogin?.id,
                },
                livros: {
                    idLivro: idLivro,
                },
                status: e,
            },
            { headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` } }
        )
            .then((resp) => {
                // setDadosLeituraa(resp.data);
                Alerta("Parabéns!", "O livro foi adicionado ao seu histórico com sucesso");
            })
            .catch((error) => console.log("ERRO NO POST                           " + error.response.data));
    };

    const postSummary = async () => {
        try {
            await Api.post(
                `/api/summary`,
                {
                    summary: summary,
                    usuarios: {
                        id: dadosUsuarioLogin?.id,
                    },
                    leituras: {
                        idLeitura: dadosLeitura?.idLeitura,
                    },
                },
                { headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` } }
            ).then((resp) => {
                // setDadosSummary(resp.data);
                Alerta("Parabéns!", "O seu resumo foi postado com sucesso! ヽ(^◇^*)/");
            });
        } catch (error) {
            Alerta("Oops!", "Parece que você ainda não tem um Status para esse livro.");
        }
    };

    const putSummary = async () => {
        try {
            await Api.put(
                `/api/summary/${dadosSummary?.idSummary}`,
                {
                    summary: summary,
                },
                { headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` } }
            ).then((resp) => {
                Alerta("Parabéns!", "O seu resumo foi alterado com sucesso.");
            });
        } catch (error) {
            Alerta("Oops!", "Algo deu errado, tente novamente.");
        }
    };

    const putLeitura = async (selectedItem, e) => {
        await Api.put(
            `/api/leitura/${selectedItem}`,
            {
                usuarios: {
                    id: dadosUsuarioLogin?.id,
                },
                livros: {
                    idLivro: dadosLivroLocal.idLivro,
                },
                status: e,
            },
            { headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` } }
        )
            .then((resp) => {
                console.log(resp.data);

                // setDadosLeituraa(resp.data)
                Alerta("Parabéns!", "O Status da sua leitura foi alterado com sucesso");
            })
            .catch((error) => console.log("ERRO NO PUT                             " + error.response.data));
    };

    const handleStatus = (e) => {
        let teste = false;
        listaLivros.map((o) => {
            if (dadosLivroLocal.idLivro == o.livros.idLivro) {
                putLeitura(o.idLeitura, e);
                teste = true;
            }
        });
        if (teste == false) {
            postLeitura(e);
        }
        navigation.navigate("Home");
    };

    const getLivrosByUsuario = async () => {
        Api.get(`/api/user/${dadosUsuarioLogin?.id}`, {
            headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` },
        })
            .then((resultado) => {
                setListaLivros(resultado.data.leituras);
            })
            .catch((error) => {
                console.log("Ocorreu um erro ao recuperar os dados dos Livros: " + JSON.stringify(error));
            });
    };

    const handleSave = (e) => {
        handleStatus(e);
    };

    const handleSelect = (e) => {
        setStatus(e);
        handleSave(e);
    };

    return (
        <>
            <ScrollView>
                <SafeAreaView style={themeContainerStyle}>
                    <View style={styles.historico}>
                        <Text style={[styles.history, themeTextStyle]}>{dadosLivroLocal?.nomeLivro}</Text>
                    </View>

                    <View style={styles.livro}>
                        <Image style={styles.imgLivros} source={{ uri: dadosLivroLocal?.imagem }}></Image>

                        <View>
                            <View style={styles.textLivro}>
                                <Text style={[styles.textoLivro, themeTextStyle]}>{dadosLivroLocal?.nomeLivro}</Text>
                                <Text style={[styles.textoLivro, themeTextStyle]}>{dadosLivroLocal?.autor}</Text>
                            </View>
                        </View>

                        {usuarioSelecionado != null ? (
                            <></>
                        ) : (
                            <SelectDropdown
                                buttonStyle={styles.inputAddLivro}
                                buttonTextStyle={styles.inputAddLivroText}
                                defaultButtonText={"Status Livro"}
                                data={reading}
                                onSelect={(e, i) => {
                                    handleSelect(e);
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem;
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item;
                                }}
                            />
                        )}
                    </View>
                    <View style={styles.resenha}>
                        <Text style={[styles.textResenha, themeTextStyle]}>{dadosSummary?.summary}</Text>

                        {usuarioSelecionado != null ? (
                            <></>
                        ) : (
                            <View style={styles.inputComentario}>
                                <TextInput
                                    style={styles.Input}
                                    placeholder="Digite aqui..."
                                    onChangeText={(value) => {
                                        setSummary(value);
                                    }}
                                    accessibilityLabel="Imput de comentário."
                                    accessibilityHint="O que achou do livro? Clique aqui para compartilhar sua opnião."
                                ></TextInput>

                                <View style={styles.comentario}>
                                    <View style={styles.iconeComentario}>
                                        {dadosSummary?.summary != null ? (
                                            <TouchableOpacity onPress={putSummary}>
                                                <Image
                                                    style={styles.iconeInput}
                                                    source={require("../../assets/icons/iconeComentario.png")}
                                                ></Image>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={postSummary}>
                                                <Image
                                                    style={styles.iconeInput}
                                                    source={require("../../assets/icons/iconeComentario.png")}
                                                ></Image>
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                </View>
                            </View>
                        )}
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
}
