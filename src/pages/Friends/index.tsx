import React, { useContext, useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableOpacity, View, useColorScheme,} from "react-native";
import { styles } from "./styles";

import { MaterialIcons } from "@expo/vector-icons";

import { Api } from "../../services/Api/api";
import { DataContext } from "../../context/DataContext";
import { DadosUserType } from "../../models/dadosUserType";

export function Friends({ navigation }) {
    const colorScheme = useColorScheme();
    const themeTextStyle =
      colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle =
      colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

    const { dadosUsuarioLogin } = useContext(DataContext);
    const [input, setInput] = useState("");
    const [user, setUser] = useState<DadosUserType[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);

    const navigateToUsuario = (idFriends: any) => {
        navigation.navigate("Usuario", {
            idFriends: idFriends,
            dadosUsuario: dadosUsuarioLogin?.token,
            dadosUsuarioId: dadosUsuarioLogin?.id,
        });
    };
    const getUser = async () => {
        try {
            const get = await Api.get(`/api/user/nome/${input}`, {
                headers: {
                    Authorization: `Bearer ${dadosUsuarioLogin?.token}`,
                },
            }).then((resp) => {
                setUser(resp.data);
                /* console.log(JSON.stringify("Dados amigo: " + JSON.stringify(user))); */
            });
            /*  .finally(() => setCarregando(false)); */
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getFriends();
    }, []);

    const getFriends = async () => {
        Api.get(`/api/user/${dadosUsuarioLogin?.id}`, {
            headers: { Authorization: `Bearer ${dadosUsuarioLogin?.token}` },
        }).catch((error) => {
            console.log("Ocorreu um erro ao recuperar os dados dos Livros: " + JSON.stringify(error));
        });
    };

    const onChangeText = (text: string) => {
        try {
            setInput(text);
            if (text.length > 3) {
                getUser();
            } else {
                setUser([]);
            }
        } catch (error) {}
    };
    const CardUser = ({ item }) => {
        return (
            <>
                <TouchableOpacity onPress={() => navigateToUsuario(item)}>
                    <View style={styles.cardUser}>
                        <View style={styles.cardUserImageBorder}>
                            {item?.imagemUrl != null ? (
                                <Image style={styles.cardUserImage} source={{ uri: item?.imagemUrl }} />
                            ) : (
                                <Image style={styles.cardUserImage} source={require("../../assets/img/user.jpg")} />
                            )}
                        </View>
                        <View style={styles.cardUserTitle}>
                            {item?.nome != null ? (
                                <Text style={[styles.cardUserName, themeTextStyle]}>{item?.nome}</Text>
                            ) : (
                                <Text style={[styles.cardUserName, themeTextStyle]}>Nome não encontrado.</Text>
                            )}
                            {item?.setor != null ? (
                                <Text style={[styles.cardUserEmail, themeTextStyle]}>{item.setor}</Text>
                            ) : (
                                <Text style={[styles.cardUserEmail, themeTextStyle]}>Setor não encontrado.</Text>
                            )}
                            {item?.email != null ? (
                                <Text style={[styles.cardUserEmail, themeTextStyle]}>{item.email}</Text>
                            ) : (
                                <Text style={[styles.cardUserEmail, themeTextStyle]}>Email não encontrado.</Text>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        );
    };
    return (
        <>
            <ImageBackground
                source={require("../../assets/img/fundoHome.png")}
                style={[styles.imageBackground, themeContainerStyle]}
            >
                <View>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="always"
                        value={input}
                        placeholder="Digite o nome..."
                        onChangeText={onChangeText}
                        style={styles.input}
                        accessibilityLabel="Barra de pesquisa."
                        accessibilityHint="Quer encontrar um amigo? Clique aqui para pesquisar pelo nome."
                    />
                    {user[0] != null && <FlatList data={user} renderItem={CardUser} keyExtractor={(item) => item.id} />}
                    {input != "" && user[0] == null ? (
                        <>
                            <View style={styles.containerText}>
                                <Text style={styles.text}>Usuário não encontrado!</Text>
                                <MaterialIcons name="mood-bad" size={38} color="black" top={0} />
                            </View>
                        </>
                    ) : (
                        <></>
                    )}
                </View>
            </ImageBackground>
        </>
    );
}
