import { TouchableOpacity, Text, View } from "react-native"
import React from 'react';
import { FontAwesome5 } from "@expo/vector-icons";


export function NotFound() {
    return (
        <View style={{ alignItems: 'center' }}>
            <FontAwesome5 name="sad-tear" size={48} color="#808080" />
            <Text style={{ fontWeight: 'bold', color: "#808080", marginTop: 12 }}>Ops, não foi encontrado nenhum resultado</Text>
        </View>
    )
}