import { Text } from "react-native"
import React from 'react';
import styles from './styles'

interface ErrorProps {
    text: string
}
export function ErrorText({ text }: ErrorProps) {
    const { textError } = styles
    return (
        <Text style={textError}>{text}</Text>
    )
}