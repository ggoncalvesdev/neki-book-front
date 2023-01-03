import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  useColorScheme,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Alerta from "../../components/Alerta";
import { DataContext } from "../../context/DataContext";
import { storeLocalData } from "../../services/LocalStorageService";

import Seta from "../../assets/icons/seta-direita.png";
import { Api } from "../../services/Api/api";

export function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState<boolean>(true);
  const { armazenaDadosUsuarioLogin } = useContext(DataContext);

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const handleLogin = async () => {
    var tokenJwt: any = null;

    try {
      const retorno = await Api.post("/api/auth/login", {
        email: email,
        password: senha,
      });

      if (retorno.status === 200) {
        tokenJwt = retorno.data;

        armazenaDadosUsuarioLogin(tokenJwt["jwt-token"]);

        storeLocalData("user", tokenJwt);

        navigation.navigate("Home");
      }
    } catch (error) {
      Alerta("Oops!", "Login ou senha errados");
    }
  };
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
              placeholder="Email"
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              accessibilityLabel="Insira o seu e-mail cooporativo aqui."
            />

            <TextInput
              placeholder="Senha"
              style={styles.input}
              secureTextEntry={true}
              onChangeText={setSenha}
              value={senha}
              accessibilityLabel="Insira sua senha aqui."
            />

            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate("Cadastro")}
              accessibilityLabel="Não tem um cadastro? Clique aqui para criar um."
            >
              <Text style={[styles.textoLink, themeTextStyle]}>Não possuo cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate("RecuperarSenha")}
              accessibilityLabel="Esqueceu seu login? Clique aqui para recuperar-lo"
            >
              <Text style={[styles.textoLink, themeTextStyle]}>Esqueci meu login</Text>
            </TouchableOpacity>
          </Animatable.View>
          <View style={styles.containerBotao}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleLogin()}
              accessibilityLabel="Botão de login."
              accessibilityHint="Clique aqui para entrar."
            >
              <View style={styles.containerTextoBotao}>
                <Text style={styles.textoBotao}>Entrar</Text>
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
//     const [dimensions, setDimensions] = useState({ window, screen });

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener(
//       "change",
//       ({ window, screen }) => {
//         setDimensions({ window, screen });
//       }
//     );
//     return () => subscription?.remove();
//   });
