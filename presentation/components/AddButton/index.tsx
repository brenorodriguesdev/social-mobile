import { Text, TouchableOpacity } from "react-native"
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { SendInviteUseCase } from "../../../domain/useCases/send-invite";

interface AddButtonProps {
    id: number
    sendInviteUseCase: SendInviteUseCase
}
export function AddButton({ id, sendInviteUseCase }: AddButtonProps) {
    return (
        <>
            <TouchableOpacity style={{
                width: 64,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 12,
                marginTop: 36
            }}>
                <Ionicons name="person-add" size={30} color="black" />
                <Text>
                    Adicionar
                            </Text>
            </TouchableOpacity>

        </>
    )
}