import { TouchableOpacity, Text, View, Dimensions } from "react-native"
import React from 'react';
import { EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import { UserModel } from "../../../domain/models/user";

interface UserRowProps {
    user: UserModel
    navigation: any

}
export function UserRow({ user, navigation }: UserRowProps) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Profile', { user })} style={{ flexDirection: 'row', width: Dimensions.get('window').width * 90 / 100, height: 48, marginBottom: 12, alignItems: 'center', borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 1 }}>
            <EvilIcons name="user" size={36} color="#808080" />
            <Text style={{ color: "#808080", fontWeight: 'bold', fontSize: 12 }}>{user.name}</Text>
        </TouchableOpacity>

    );

}