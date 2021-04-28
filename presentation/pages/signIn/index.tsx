import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    View,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { SignInUseCase } from '../../../domain/useCases/sign-in';


import { Button, Input } from '../../components';

import styles from './styles'

interface SignInProps {
    signInUseCase: SignInUseCase
}
export function SignIn({ signInUseCase }: SignInProps) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { container } = styles;

    const enter = async () => {
        try {
            const accessToken = await signInUseCase.sign({
                email,
                password
            })

            await AsyncStorage.setItem(
                'accessToken',
                String(accessToken)
            );

        }
        catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={container}>

                <Input label='Email' keyboardType="email-address" onChangeText={(value: string) => { setEmail(value) }} />
                <Input label='Senha' secureTextEntry={true} textContentType="password" onChangeText={(value: string) => { setPassword(value) }} />
                <Button text="Entrar" onClick={enter} />

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