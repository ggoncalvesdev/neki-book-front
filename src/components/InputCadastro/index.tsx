/* import React, { useState } from "react";
import { styles } from "./styles";
import * as Animatable from "react-native-animatable";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export const InputCadastro = () => {
    const [hidePass, setHidePass] = useState(true);

    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [setor, setSetor] = useState(null);
    const [password, setPassword] = useState(null);

    const [loading, setLoading] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <Animatable.View animation="fadeInUp" style={styles.containerLogo}>
                <TextInput
                    placeholder="Nome Completo"
                    style={styles.input}
                    onChangeText={(value) => {
                        setNome(value);
                    }}
                />

                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={(value) => {
                        setEmail(value);
                    }}
                />

                <TextInput
                    placeholder="Setor"
                    onChangeText={(value) => {
                        setSetor(value);
                    }}
                    style={styles.input}
                />

                <View style={styles.containerSenha}>
                    <TextInput
                        placeholder="Senha"
                        secureTextEntry={hidePass}
                        style={styles.input}
                        onChangeText={(value) => {
                            setPassword(value);
                        }}
                    />
                    <TouchableOpacity
                        style={styles.eyevisible}
                        onPress={() => setHidePass(!hidePass)}
                    >
                        {hidePass ? (
                            <>
                                <Ionicons
                                    name="eye-off-outline"
                                    size={24}
                                    color="#2D939C"
                                />
                            </>
                        ) : (
                            <>
                                <Ionicons
                                    name="eye-outline"
                                    size={24}
                                    color="#2D939C"
                                />
                            </>
                        )}
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder="Validar senha"
                    secureTextEntry={true}
                    style={styles.input}
                />
            </Animatable.View>
        </SafeAreaView>
    );
};
 */
