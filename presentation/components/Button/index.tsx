import { TouchableOpacity, Text } from "react-native"
import React from 'react';
import styles from './styles'

interface ButtonProps {
    text: string
    disabled: boolean
    onClick: () => void
}

export function Button({ text, disabled, onClick }: ButtonProps) {
    const { button, buttonDisabled, textButton } = styles
    return (
        <TouchableOpacity disabled={disabled} style={disabled ? buttonDisabled : button} onPress={onClick}>
            <Text style={textButton}>{text}</Text>
        </TouchableOpacity>
    )
}