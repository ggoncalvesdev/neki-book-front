import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useColorScheme,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { clearStorage } from "../../services/LocalStorageService";
import { style } from "../../components/InputCadastro/styles";

import LogoBranca from "../../assets/img/logo-20-anos-branco.png";
import LogoPreta from "../../assets/img/logo-20-anos.png";
import { useFonts, OpenSans_700Bold } from "@expo-google-fonts/open-sans";

export function Settings({ navigation }) {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const AppExit = () => {
    clearStorage();

    navigation.navigate("BemVindo");
  };

  const [fontsLoaded] = useFonts({
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={[styles.container, themeContainerStyle]}>
        <View>
          <Text style={[styles.textTitle, themeTextStyle]}>Configurações</Text>
          <Text style={[styles.text, themeTextStyle]}>
            Tema atual: {colorScheme}
          </Text>

          <TouchableOpacity style={styles.exit} onPress={() => AppExit()}>
            <Ionicons name="exit" size={28} style={themeTextStyle} />
            <Text style={[styles.exitText, themeTextStyle]}> Sair</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.InfoApp}>
          <View style={styles.viewImg}>
            {colorScheme === "light" ? (
              <Image source={LogoPreta} style={styles.imgLogo} />
            ) : (
              <Image source={LogoBranca} style={styles.imgLogo} />
            )}
            <Text style={[styles.logotipo, themeTextStyle]}>NekiBook</Text>
          </View>
          <Text style={[styles.App, themeTextStyle]}>Versão do App</Text>
          <Text style={[styles.Version, themeTextStyle]}>1.0.0</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  imageBackground: {
    resizeMode: "repeat",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  lightContainer: {
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#211f1f",
  },
  lightThemeText: {
    color: "#22354f",
  },
  darkThemeText: {
    color: "#fff",
  },
  textTitle: {
    marginTop: 40,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    marginTop: 40,
    marginLeft: 20,
    fontSize: 20,
  },
  exit: {
    margin: 20,
    flexDirection: "row",
  },
  exitText: {
    fontSize: 20,
    marginTop: 1,
    marginLeft: 15,
  },
  App: {
    fontSize: 20,
  },
  Version: {
    fontSize: 15,
  },
  InfoApp: {
    marginBottom: 50,
    alignItems: "center",
  },
  viewImg: {
    flexDirection: "row",
  },
  imgLogo: {
    height: 120,
    width: 120,
    marginRight: 5,
  },
  logotipo: {
    color: "#fff",
    fontSize: 30,
    marginTop: 45,
    fontFamily: "OpenSans_700Bold",
  },
});
