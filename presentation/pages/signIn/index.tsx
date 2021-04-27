import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native';


import { Button, Input } from '../../components';

import styles from './styles'

export function SignIn() {


    const { container } = styles;
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={container}>
                
                <Input label='Email' keyboardType="email-address" />
                <Input label='Senha' secureTextEntry={true} textContentType="password" />
                <Button text="Entrar" />

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ marginRight: 12 }}>
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