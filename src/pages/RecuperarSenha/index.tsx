import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground, useColorScheme } from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

import Seta from "../../assets/icons/seta-direita.png";
import Loading from "../../components/loading";
import Alerta from "../../components/Alerta";
import { Api } from "../../services/Api/api";

export function RecuperarSenha({ navigation }) {
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState("");

    const getUserByEmail = async () => {
        setVisible(true);
        Api.get(`/api/email/${email}`, {})
            .then((resultado) => {
                console.log("Email: " + JSON.stringify(resultado.data));
                setEmail(resultado.data);
                console.log(email);
                Alerta(
                    "Sucesso",
                    "Sua senha foi enviada ao e-mail cadastrado na plataforma, verifique sua caixa de entrada"
                );
                setVisible(false);
                navigation.navigate("Login");
            })
            .catch((error) => {
                setVisible(false);
                console.log("ocorreu um erro " + JSON.stringify(error));
                Alerta("Erro", "Email não cadastrado!");
            });
    };

    return (
        <>
            <ImageBackground
                source={require("../../assets/img/fundo.png")}
                style={[styles.imageBackground, themeContainerStyle]}
            >
                <SafeAreaView>
                    <Loading visible={visible} />
                    <Animatable.View animation={"fadeInLeft"} delay={500} style={styles.containerTitulo}>
                        <Text style={[styles.subTitulo, themeTextStyle]}>Entre no App</Text>
                        <Text style={[styles.titulo, themeTextStyle]}>NekiBook</Text>
                    </Animatable.View>

                    <Animatable.View animation="fadeInUp" style={styles.containerImput}>
                        <TextInput
                            placeholder="Email cadastrado"
                            style={styles.input}
                            onChangeText={(value) => {
                                setEmail(value);
                            }}
                            accessibilityLabel="Imput e-mail."
                            accessibilityHint="Insira o seu e-mail que foi utilizado para o cadastro."
                        />
                    </Animatable.View>

                    <View style={styles.containerBotao}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                getUserByEmail();
                            }}
                            accessibilityLabel="Botão para ir para login."
                            accessibilityHint="Terminou? Clique aqui para ser redirecionado para a página de Login."
                        >
                            <View style={styles.containerTextoBotao}>
                                <Text style={styles.textoBotao}>Recuperar</Text>
                                <Image source={Seta} style={styles.setaBotao} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </>
    );
}
// const window = Dimensions.get("window");
// const screen = Dimensions.get("screen");

// const {width, height} = Dimensions.get('screen');
// const [dimensions, setDimensions] = useState({ window, screen });

// useEffect(() => {
//   const subscription = Dimensions.addEventListener(
//     "change",
//     ({ window, screen }) => {
//       setDimensions({ window, screen });
//     }
//   );
//   return () => subscription?.remove();
// });
