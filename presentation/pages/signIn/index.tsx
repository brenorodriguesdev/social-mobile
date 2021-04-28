import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    View,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { Validator } from '../../../validation/contracts/validator';
import { SignInUseCase } from '../../../domain/useCases/sign-in';


import { Button, Input } from '../../components';

import styles from './styles'

interface SignInProps {
    signInUseCase: SignInUseCase
    validator: Validator
}
export function SignIn({ signInUseCase, validator }: SignInProps) {

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

    useEffect(() => {
        if (email) {
            const error = validator.validate({ email }, 'email')
            if (error) {
                
            }
        }
    }, [email])

    useEffect(() => {
        if (password) {
            const error = validator.validate({ password }, 'password')
            if (error) {
                
            }
        }
    }, [password])

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={container}>

                <Input label='Email' keyboardType="email-address" onChangeText={(value: string) => { setEmail(value) }} />
                <Input label='Senha' secureTextEntry={true} textContentType="password" onChangeText={(value: string) => { setPassword(value) }} />
                <Button text="Entrar" disabled={!email || !password} onClick={enter} />

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