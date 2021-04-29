import { Text, View } from "react-native"
import React from 'react';
import { FontAwesome5 } from "@expo/vector-icons";

interface NotFoundProps {
    text: string
    style?: any
}
export function NotFound({ text, style }: NotFoundProps) {
    return (
        <View style={[style, { alignItems: 'center' }]}>
            <FontAwesome5 name="sad-tear" size={48} color="#808080" />
            <Text style={{ fontWeight: 'bold', color: "#808080", marginTop: 12 }}>{text}</Text>
        </View>
    )
}