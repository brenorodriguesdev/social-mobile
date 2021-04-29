import { Text, View, Dimensions } from "react-native"
import React from 'react';
import { EvilIcons } from "@expo/vector-icons";
import { AddButton, BlockButton } from "..";

interface ProfileHeader {
    name: string
}

export function ProfileHeader({ name }: ProfileHeader) {
    return (
        <View style={{ alignItems: 'center', marginTop: 48, width: Dimensions.get('window').width * 90 / 100, height: 256, marginBottom: 12, borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 2 }}>
            <EvilIcons name="user" size={128} />
            <Text style={{ fontWeight: 'bold', marginTop: 12 }}>{name}</Text>

            <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', width: Dimensions.get('window').width * 75 / 100, height: Dimensions.get('window').height * 15 / 100 }}>

                <AddButton />

                <BlockButton />

            </View>

        </View>
    )
}