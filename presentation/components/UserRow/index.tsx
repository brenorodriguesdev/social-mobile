import { TouchableOpacity, Text, View, Dimensions } from "react-native"
import React from 'react';
import { EvilIcons, FontAwesome5 } from "@expo/vector-icons";

interface UserRowProps {
    name: string

}
export function UserRow({ name }: UserRowProps) {
    return (
        <View style={{ flexDirection: 'row', width: Dimensions.get('window').width * 90 / 100, height: 48, marginBottom: 12, alignItems: 'center', borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 2 }}>
            <EvilIcons name="user" size={36} color="#808080" />
            <Text style={{ color: "#808080", fontWeight: 'bold', fontSize: 12 }}>{name}</Text>
        </View>

    );

}