import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native';


import { Button, Input } from '../../components';

import styles from './styles'


export function SignUp() {


    const { container } = styles;
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={container}>

                <Input label='Nome Completo' keyboardType="email-address" />
                <Input label='Email' keyboardType="email-address" />
                <Input label='Senha' secureTextEntry={true} textContentType="password" />
                <Input label='Confirmar Senha' secureTextEntry={true} textContentType="password" />
                <Button text="Cadastrar" />

            </View>
        </>
    );
}