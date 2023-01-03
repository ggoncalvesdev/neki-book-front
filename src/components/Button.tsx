import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Modal,
} from "react-native";
import { useState } from "react";

import { ActionModal } from "./actionModal/ActionModal";

export default function AddButton() {
    const [visibalModal, setVisibalModal] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setVisibalModal(true)}
                accessibilityLabel="Botão adicionar."
                accessibilityHint="Quer adicionar um livro? Clique aqui."
            >
                <ImageBackground
                    source={require("../assets/icons/mais.png")}
                    style={styles.buttonImageIconStyle}
                ></ImageBackground>
            </TouchableOpacity>

            <Modal
                visible={visibalModal}
                transparent={true}
                onRequestClose={() => setVisibalModal(false)}
                animationType="fade"
            >
                <ActionModal handleClose={() => setVisibalModal(false)} />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 5,
        height: 58,
        width: 58,
        borderRadius: 23,
        backgroundColor: "#2a8894",
        transform: [{ rotate: "45deg" }],
        justifyContent: "center",
        alignItems: "center",
    },
    buttonImageIconStyle: {
        width: 25,
        height: 25,
        alignContent: "center",
        alignItems: "center",
        transform: [{ rotate: "45deg" }],
    },
});

export const AddButtonAnimated = () => null;
