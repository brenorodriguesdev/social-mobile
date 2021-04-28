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


import { Button, ErrorText, Input } from '../../components';

import styles from './styles'

interface SignInProps {
    signInUseCase: SignInUseCase
    validator: Validator
    navigation: any
}
export function SignIn({ signInUseCase, validator, navigation }: SignInProps) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [mainError, setMainError] = useState('')

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
            setMainError(error.message)
        }
    }

    const validateEmail = () => {
        const error = validator.validate({ email }, 'email')
        setEmailError(error ? error.message : '')
    }

    const validatePassword = () => {
        const error = validator.validate({ password }, 'password')
        setPasswordError(error ? error.message : '')
    }

    useEffect(() => {

        if (email) {
            validateEmail()
        }

    }, [email])

    useEffect(() => {

        if (password) {
            validatePassword()
        }

    }, [password])

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={container}>
                <Input label='Email' keyboardType="email-address" onChangeText={(value: string) => { setEmail(value) }} onBlur={validateEmail} error={emailError.length > 0} />
                <ErrorText text={emailError} />
                <Input label='Senha' secureTextEntry={true} textContentType="password" onChangeText={(value: string) => { setPassword(value) } } onBlur={validatePassword} error={passwordError.length > 0} />
                <ErrorText text={passwordError} />
                <Button text="Entrar" disabled={!email || !password || emailError.length > 0 || passwordError.length > 0} onClick={enter} />
                <ErrorText text={mainError} />

                <View style={{ flexDirection: 'row', marginTop: 12 }}>
                    <TouchableOpacity style={{ marginRight: 12 }}>
                        <Text>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text>Criar Conta</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </>
    );
}