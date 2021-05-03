import { Text, TouchableOpacity } from "react-native"
import React from 'react';
import { Entypo } from "@expo/vector-icons";

export function ChatButton() {

    return (
        <>
            <TouchableOpacity style={{
                width: 68,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 12,
                marginTop: 36
            }}>
                <Entypo name="chat" size={30} color="black" />
                <Text>
                    Conversar
                            </Text>
            </TouchableOpacity>

        </>
    )
}