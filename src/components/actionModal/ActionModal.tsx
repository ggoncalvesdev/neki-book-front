import React from "react";
import { SafeAreaView, TouchableOpacity, Text, Image } from "react-native";
import { View } from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
export function ActionModal({ handleClose }) {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={{ flex: 1, zIndex: 9 }}
                onPress={handleClose}
            ></TouchableOpacity>

            <View style={styles.content}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.actionButton}
                    onPress={() => navigation.navigate("ISBN")}
                    accessibilityLabel="Botão adicionar."
                    accessibilityHint="Clique aqui para adicionar um livro por ISBN."
                >
                    <Image
                        source={require("../../assets/img/imgButton2.png")}
                        style={styles.imgButton}
                    />
                    <Text style={styles.actionText}>
                        Adicionar livro por ISBN
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.actionButton}
                    onPress={() => {
                        navigation.navigate("CadastroLivro");
                    }}
                    accessibilityLabel="Botão adicionar."
                    accessibilityHint="Clique aqui para adicionar um livro inserindo as informações manualmente."
                >
                    <Image
                        source={require("../../assets/img/imgButton.png")}
                        style={styles.imgButton}
                    />
                    <Text style={styles.actionText}>
                        Adicionar livro manualmente
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
