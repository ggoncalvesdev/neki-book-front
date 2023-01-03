import React from "react";

import { useNavigation } from "@react-navigation/native";

import Seta from "../../assets/icons/seta-direita.png";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const BotaoPrincipal = (props, { navigation }) => {
    /*     const navigation = useNavigation();
     */ return (
        <>
            <View style={styles.containerBotao}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate("Login")}
                    style={styles.botao}
                >
                    <View style={styles.containerTextoBotao}>
                        <Text style={styles.textoBotao}>
                            {props.textoBotao}
                        </Text>
                        <Image source={Seta} style={styles.setaBotao} />
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
};
