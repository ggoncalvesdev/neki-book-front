import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList, useColorScheme } from "react-native";
import { styles } from "./styles";

import { Api } from "../../services/Api/api";
import { SafeAreaView } from "react-native-safe-area-context";
import { DadosLivroLocalType } from "../../models/DadosLivroLocalType";
import { AntDesign } from '@expo/vector-icons';

export function Usuario({ navigation, route }) {

    const colorScheme = useColorScheme();
    const themeTextStyle =
      colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle =
      colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

    const friends = route.params?.idFriends;
    const friendsId = route.params?.idFriends.id;
    const dadosUsuarioLogadoId = route.params?.dadosUsuarioId;
    const dadosUsuarioLogadoToken = route.params?.dadosUsuario;

    const [dadosLivro, setDadosLivro] = useState<DadosLivroLocalType>();
    const [idAmizade, setIdAmizade] = useState("");

    const navigateToLivro = (idLivro: any, friends) => {
        navigation.navigate("PageLivro", { idLivro: idLivro, friends: friends });        
    };

    const chamaNavegacao = (idLivro, friends) => {
        navigateToLivro(idLivro, friends);
    }

    const postUserFollowFriends = async () => {
        await Api.post(
            `/api/amizade`,
            {
                usuarioSeguidor: {
                    id: dadosUsuarioLogadoId,
                },
                usuarioSeguido: {
                    id: route.params?.idFriends.id,
                },
            },
            { headers: { Authorization: `Bearer ${dadosUsuarioLogadoToken}` } }
        ).catch((error) => {
            console.log("Ocorreu um erro ao recuperar os dados dos usuários: " + JSON.stringify(error));
        });
    };

    const deleteUserFollowFriends = async () => {
        await Api.delete(`/api/amizade/${idAmizade}`, {
            headers: { Authorization: `Bearer ${dadosUsuarioLogadoToken}` }
    })};


    const getUserAndFriends = async () => {
        await Api.get(`/api/amizade`, {
            headers: { Authorization: `Bearer ${dadosUsuarioLogadoToken}` },
        })
            .then((resultado) => {
                // console.log("ID Amizade:" + resultado.data[0]?.idAmizade);
                // console.log("usuarioSeguido:" + resultado.data[0]?.usuarioSeguido);
                // console.log("usuarioSeguidor:" + resultado.data[0]?.usuarioSeguidor?.nome);
                getAmizadeByUsuario();
            })
            .catch((error) => {
                console.log("Ocorreu um erro ao recuperar os dados dos Usuários: " + JSON.stringify(error));
            });
    };

    const getAmizadeByUsuario = async () => {
        await Api.get(`api/amizade/userSeguidor/${dadosUsuarioLogadoId}/userSeguido/${route.params?.idFriends.id}`, {
            headers: { Authorization: `Bearer ${dadosUsuarioLogadoToken}` },
        })
            .then((resultado) => {

                setIdAmizade(resultado.data?.idAmizade);
            })
            .catch((error) => {
                
                console.log("Ocorreu um erro ao recuperar os dados dos Usuários2: " + JSON.stringify(error));
            });
    }

    useEffect(() => {
        getUserAndFriends();
    }, []);

    useEffect(() => {
        getLivrosByUsuario();
    }, []);

    const Item = ({ item, eventoPressionarBotao }) => (
        <View style={styles.livrohist}>
            <Text style={[styles.status, themeTextStyle]}>{item?.status}</Text>
            <TouchableOpacity onPress={eventoPressionarBotao}>
                {(item?.livros?.imagem != null && (
                    <ImageBackground
                        source={{ uri: item?.livros?.imagem }}
                        style={styles.imgLivros}
                        imageStyle={{ borderRadius: 25 }}
                    ></ImageBackground>
                )) || (
                    <ImageBackground
                        source={require("../../assets/img/livrocapa.jpg")}
                        style={styles.imgLivros}
                        imageStyle={{ borderRadius: 25 }}
                    ></ImageBackground>
                )}
            </TouchableOpacity>
        </View>
    );

    const getLivrosByUsuario = async () => {
        Api.get(`/api/user/${friendsId}`, {
            headers: { Authorization: `Bearer ${dadosUsuarioLogadoToken}` },
        })
            .then((resultado) => {
                setDadosLivro(resultado.data.leituras);
            })
            .catch((error) => {
                console.log("Ocorreu um erro ao recuperar os dados dos Livros: " + JSON.stringify(error));
            });
    };
    const renderItem = ({ item }) => {
        // return <Item item={item} eventoPressionarBotao={() => navigateToLivro(item.livros.idLivro)} />;
        return <Item item={item} eventoPressionarBotao={() => chamaNavegacao(item.livros.idLivro, friends)} />;
    };
    return (
        <>
            <ImageBackground source={require("../../assets/img/fundoHome.png")} style={[styles.imageBackground, themeContainerStyle]}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.containerImg}>
                        <View style={styles.bordaImg}>
                            {friends?.imagemUrl != null ? (
                                <Image
                                    style={styles.imgperfil}
                                    source={{
                                        uri: friends?.imagemUrl,
                                    }}
                                />
                            ) : (
                                <Image style={styles.imgperfil} source={require("../../assets/img/user.jpg")} />
                            )}
                        </View>
                    </View>

                    <View style={styles.identificacao}>
                        <Text style={styles.nome}>{friends?.nome}</Text>
                        <Text style={styles.setor}>{friends?.setor}</Text>
                        <Text style={styles.userName}>{friends?.email}</Text>
                    </View>

                    {idAmizade != null ?
                    <TouchableOpacity onPress={() => deleteUserFollowFriends()}>
                    <View style={styles.adduser}>
                        <AntDesign name="deleteuser" size={24} color="black" />
                    </View>
                </TouchableOpacity>:
                    <TouchableOpacity onPress={() => postUserFollowFriends()}>
                        <View style={styles.adduser}>
                            <AntDesign name="adduser" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    }

                    <View style={styles.infos}>
                        <Text style={[styles.infotext, themeTextStyle]}>
                            Livros{"\n"}Adicionados{"\n"}
                            {friends?.leituras.length}
                        </Text>
                        <Text style={[styles.infotext, themeTextStyle]}>
                            Amigos{"\n"}Adicionados{"\n"}
                            {friends?.amizadeSeguidos.length}
                        </Text>
                    </View>

                    <View style={styles.historico}>
                        <Text style={[styles.history, themeTextStyle]}>Histórico</Text>
                    </View>

                    <View style={styles.imagens}>
                        <FlatList
                            data={dadosLivro}
                            renderItem={renderItem}
                            keyExtractor={(item) => item?.livros?.idLivro}
                            numColumns={2}
                            extraData={Item}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </>
    );
}
