import React, { useContext } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  useColorScheme,
} from "react-native";
import { styles } from "./styles";

import Seta from "../../assets/icons/seta-direita.png";
import {
  storeLocalData,
  retrieveLocalData,
  clearStorage,
} from "../../services/LocalStorageService";
import { DataContext } from "../../context/DataContext";
import { BotaoPrincipal } from "../../components/BotaoPrincipal";
import Logo from "../../components/Logo";

export function BemVindo({ navigation }) {

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const { armazenaDadosUsuarioLogin } = useContext(DataContext);

  const usuarioLogado = async () => {
    try {
      const response = JSON.parse(await retrieveLocalData("user"));

      // console.log("Valor do storage: " + response);

      if (response == null) {
        navigation.navigate("Login");
      }

      armazenaDadosUsuarioLogin(response["jwt-token"]);

      navigation.navigate("Home");
    } catch (error) {}
  };

  return (
    <>
      <ImageBackground
        source={require("../../assets/img/fundo2.png")}
        style={[styles.imageBackground, themeContainerStyle]}
      >
        <SafeAreaView>
          <View style={styles.containerTitulo}>
            <Text style={[styles.subTitulo, themeTextStyle]}>Este é o</Text>
            <Text style={[styles.titulo, themeTextStyle]}>NekiBook</Text>
          </View>
          <View style={styles.containerLogo}>
            <Logo />
          </View>
          <View style={styles.containerBotao}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => usuarioLogado()}
              accessibilityLabel="Clique aqui para ir para a página de Login."
            >
              <View style={styles.containerTextoBotao}>
                <Text style={styles.textoBotao}>Login</Text>
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

// const { width, height } = Dimensions.get('screen')

// const [dimensions, setDimensions] = useState({ window, screen });

// useEffect(() => {
//     const subscription = Dimensions.addEventListener(
//       "change",
//       ({ window, screen }) => {
//         setDimensions({ window, screen });
//       }
//     );
//     return () => subscription?.remove();
//   });
