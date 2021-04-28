import { View, TextInput } from "react-native"
import React from 'react';
import styles from './styles'

interface SearchFormProps {
    text: string
}

export function SearchForm({ text }: SearchFormProps) {
    const { container, input } = styles
    return (
        <View style={container}>
            <TextInput
                style={input}
                placeholder={text}
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
            />
        </View>
    )
}