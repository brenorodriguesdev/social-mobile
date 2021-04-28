import { TouchableOpacity, View, TextInput } from "react-native"
import React from 'react';
import styles from './styles'
import { MaterialIcons } from "@expo/vector-icons";

interface SearchFormProps {
    text: string
    iconName: any
}

export function SearchForm({ text, iconName }: SearchFormProps) {
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