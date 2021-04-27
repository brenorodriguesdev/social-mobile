import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native';

import {
    TextInput,
} from 'react-native-paper';
import Button from '../../components/Button';

import styles from './styles'

export default function SignUp() {


    const { container, input, button, textButton } = styles;
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={container}>
                <TextInput
                    mode="outlined"
                    label='Email'
                    style={input}
                    theme={{ colors: { primary: "#0080ff" } }}
                    keyboardType="email-address"
                />
                <TextInput
                    mode="outlined"
                    label='Senha'
                    style={input}
                    secureTextEntry={true}
                    theme={{ colors: { primary: "#0080ff" } }}
                    textContentType="password"
                />

                <TouchableOpacity style={button}>
                    <Text style={textButton}>Entrar</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{marginRight:12}}>
                        <Text>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Criar Conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}