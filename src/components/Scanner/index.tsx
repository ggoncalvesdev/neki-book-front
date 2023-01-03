import React, { useState, useEffect } from "react";
import { Text, View, Button, Image, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { validateIsbn } from "../../services/Books";
import PropTypes from "prop-types";
import { styles } from "./styles";

export function Scanner({ onScan }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    let scannerAttemps = 0;

    const onDetected = ({ type, data }) => {
        const isbn = data;
        setScanned(true);

        if (validateIsbn(isbn)) {
            onScan(isbn);
            return;
        } else {
            if (scannerAttemps >= 5) {
                alert(
                    "Não é possível ler o código do livro, por favor, tente novamente"
                );
            }
        }
        scannerAttemps++;
        onDetected({ type, data });
    };

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getBarCodeScannerPermissions();
    }, []);

    if (hasPermission === null) {
        return <Text>Solicitando permissão de câmera</Text>;
    }

    if (hasPermission === false) {
        return <Text>Sem acesso à câmera</Text>;
    }

    return (
        <>
            <View style={styles.container}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : onDetected}
                    style={styles.scanner}
                />
                {scanned && (
                     <Button                        
                        title={"Toque para digitalizar novamente"}
                        onPress={() => setScanned(false)}
                    />                    
                )}
                <Text style={styles.textScanMarker}>
                    Aponte para o código de barras do livro
                </Text>
                <Image
                    source={require("../../assets/img/leitura-de-codigo-de-barras.png")}
                    style={styles.scanMarker}
                />
                <Image
                    source={require("../../assets/img/logo-neki-book-sem-fundo.png")}
                    style={styles.logo}
                />
            </View>
        </>
    );
}
Scanner.propTypes = {
    onScan: PropTypes.func,
};
