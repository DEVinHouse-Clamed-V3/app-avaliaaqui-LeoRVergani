import { useState } from "react";
import { SafeAreaView, Text } from "react-native";

export default function Lista() {

    const [produtos, setProdutos] = useState([])

    return (
        <SafeAreaView>
            <Text>Tela Listagem</Text>
        </SafeAreaView>
    )
}