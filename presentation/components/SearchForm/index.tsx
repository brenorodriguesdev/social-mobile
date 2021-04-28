import { View, TextInput } from "react-native"
import React from 'react';
import styles from './styles'

interface SearchFormProps {
    text: string
    change: (text: string) => void;
}

export function SearchForm({ text, change }: SearchFormProps) {
    const { container, input } = styles
    return (
        <View style={container}>
            <TextInput
                onChangeText={change}
                style={input}
                placeholder={text}
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
            />
        </View>
    )
}