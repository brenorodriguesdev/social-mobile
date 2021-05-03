import { Text, View, Dimensions } from "react-native"
import React from 'react';
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ChatRowProps {
    name: string
    message: string
}

export function ChatRow({ name, message }: ChatRowProps) {
    return (
        <>
            <TouchableOpacity style={{ flexDirection: 'row', width: Dimensions.get('window').width, marginBottom: 12, borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 1, paddingBottom: 12, paddingTop: 12 }}>
                <EvilIcons name="user" size={48} />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 12, marginTop: 6 }}>{name}</Text>
                    <Text style={{ fontSize: 10 }}>{message}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}