import { TouchableOpacity, Text } from "react-native"
import React from 'react';
import styles from './styles'

interface ButtonProps {
    text: string
    onClick: () => void
}

export function Button({ text, onClick }: ButtonProps) {
    const { button, textButton } = styles
    return (
        <TouchableOpacity style={button} onPress={onClick}>
            <Text style={textButton}>{text}</Text>
        </TouchableOpacity>
    )
}