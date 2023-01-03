import React from "react";
import { Appearance, useColorScheme } from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";

export default function Logo() {
  const colorScheme = Appearance.getColorScheme();

  if (colorScheme === "light") {
    return (
      <Animatable.Image
        animation="flipInY"
        style={styles.logoNekiBook}
        source={require("../../assets/img/logo-20-anos.png")}
      />
    );
  } else {
    return (
      <Animatable.Image
        animation="flipInY"
        style={styles.logoNekiBook}
        source={require("../../assets/img/logo-20-anos-branco.png")}
      />
    );
  }
}
