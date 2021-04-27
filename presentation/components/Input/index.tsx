import React from 'react'
import { TextInput } from 'react-native-paper'
import styles from './styles'

export function Input(props: any) {
    const { input } = styles

    return (
        <TextInput
            {...props}
            mode="outlined"
            style={input}
            theme={{ colors: { primary: "#0080ff" } }}
        />
    )
}