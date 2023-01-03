import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { Results } from "../Results";
import Voltar from "../../assets/icons/voltar.png";
import { Scanner } from "../Scanner";

export function ISBN({ navigation }) {
    const [isbn, setIsbn] = useState();
    return (
        <SafeAreaView style={styles.container}>
            <Scanner onScan={setIsbn} />
            {isbn && (
                <>
                    <Results isbn={isbn} />
                </>
            )}
        </SafeAreaView>
    );
}