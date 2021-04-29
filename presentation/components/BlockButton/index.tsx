import { Text, TouchableOpacity } from "react-native"
import React from 'react';
import { Entypo } from "@expo/vector-icons";


export function BlockButton() {
    return (
        <>
            <TouchableOpacity style={{
                width: 64,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 6,
                marginBottom: 12,
                marginTop: 36
            }}>
                <Entypo name="block" size={30} color="black" />
                <Text>
                    Bloquear
                            </Text>
            </TouchableOpacity>

        </>
    )
}