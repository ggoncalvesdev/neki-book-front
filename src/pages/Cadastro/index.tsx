import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  useColorScheme,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

import Seta from "../../assets/icons/seta-direita.png";
import { Ionicons } from "@expo/vector-icons";
import Alerta from "../../components/Alerta";
import {
  postUser,
  RegistroUser,
} from "../../services/Api/Request/registoService";

export function Cadastro({ navigation }) {
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [setor, setSetor] = useState(null);
  const [password, setPassword] = useState(null);
  const [validPass, setValidPass] = useState(null);
  const [hidePass, setHidePass] = useState(true);

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  function salvar() {
    let data: RegistroUser = {
      nome: nome,
      email: email,
      setor: setor,
      password: password,
    };
    console.log(data);

    if (password == validPass) {
      postUser(data)
        .then((res) => {
          console.log(res.data);
          Alerta("Parabéns!", "você foi cadastrado com sucesso!");
          navigation.navigate("Login");
        })
        .catch((err) => {
          Alerta(
            "Oops!",
            " Este e-mail já está em uso, verique-o ou recupere sua senha"
          );
          console.log(err);
        });
    } else {
      Alerta("Oops!", "As senhas não coincidem");
    }
  }

  return (
    <>
      <ImageBackground
        source={require("../../assets/img/fundo.png")}
        style={[styles.imageBackground, themeContainerStyle]}
      >
        <SafeAreaView>
          <Animatable.View
            animation={"fadeInLeft"}
            delay={500}
            style={styles.containerTitulo}
          >
            <Text style={[styles.subTitulo, themeTextStyle]}>Entre no App</Text>
            <Text style={[styles.titulo, themeTextStyle]}>NekiBook</Text>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" style={styles.containerImput}>
            <TextInput
              placeholder="Nome Completo"
              style={styles.input}
              onChangeText={(value) => {
                setNome(value);
              }}
              accessibilityHint="Insira seu nome completo."
            />

            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={(value) => {
                setEmail(value);
              }}
              accessibilityHint="Insira seu e-mail coorporativo."
            />

            <TextInput
              placeholder="Setor"
              onChangeText={(value) => {
                setSetor(value);
              }}
              style={styles.input}
              accessibilityHint="Insira o seu setor."
            />
            <TextInput
              placeholder="Senha"
              secureTextEntry={hidePass}
              style={styles.input}
              onChangeText={(value) => {
                setPassword(value);
              }}
              accessibilityHint="Insira uma senha que tenha seis caracteres."
            ></TextInput>

            <TouchableOpacity
              style={styles.eyevisible}
              onPress={() => setHidePass(!hidePass)}
            >
              {hidePass ? (
                <>
                  <Ionicons name="eye-off-outline" size={24} color="#2D939C" />
                </>
              ) : (
                <>
                  <Ionicons name="eye-outline" size={24} color="#2D939C" />
                </>
              )}
            </TouchableOpacity>
            <TextInput
              placeholder="Validar senha"
              secureTextEntry={true}
              style={styles.input}
              onChangeText={(value) => {
                setValidPass(value);
              }}
              accessibilityHint="Insira sua senha novamente para valida-la."
            />
          </Animatable.View>
          <View style={styles.containerBotao}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                salvar();
              }}
              accessibilityLabel="Botão cadastro."
              accessibilityHint="Clique aqui para finalizar o seu cadastro."
            >
              <View style={styles.containerTextoBotao}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
                <Image source={Seta} style={styles.setaBotao} />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
