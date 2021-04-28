import React from 'react'
import { TextInput } from 'react-native-paper'
import styles from './styles'

export function Input(props: any) {
    const { input } = styles
    const color = props.error ? "red" : "#0080ff"
    return (
        <TextInput
            {...props}
            mode="outlined"
            style={input}
            theme={{ colors: { primary: color } }}
        />
    )
}