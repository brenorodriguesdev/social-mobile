import { TouchableOpacity, Text } from "react-native"
import React from 'react';
import styles from './styles'

interface ButtonProps {
    text: string
}

export function Button({ text }: ButtonProps) {
    const { button, textButton } = styles
    return (
        <TouchableOpacity style={button}>
            <Text style={textButton}>{text}</Text>
        </TouchableOpacity>
    )
}