import React, { useEffect, useState } from 'react';

import {
    View,
    StatusBar
} from 'react-native';
import { CreateUserUseCase } from '../../../domain/useCases/create-user';
import { Validator } from '../../../validation/contracts/validator';


import { Button, ErrorText, Input } from '../../components';

import styles from './styles'

interface SignUpProps {
    createUserUseCase: CreateUserUseCase
    validator: Validator
}

export function SignUp({ createUserUseCase, validator }: SignUpProps) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordConfirmationError, setPasswordConfirmationError] = useState('')

    const [mainError, setMainError] = useState('')

    const { container } = styles;

    const register = async () => {
        try {
            await createUserUseCase.create({
                name,
                email,
                password
            })
        }
        catch (error) {
            setMainError(error.message)
        }
    }

    const validateName = () => {
        const error = validator.validate({ name }, 'name')
        setNameError(error ? error.message : '')
    }

    const validateEmail = () => {
        const error = validator.validate({ email }, 'email')
        setEmailError(error ? error.message : '')
    }

    const validatePassword = () => {
        const error = validator.validate({ password }, 'password')
        setPasswordError(error ? error.message : '')
    }

    const validatePasswordConfirmation = () => {
        const error = validator.validate({ passwordConfirmation }, 'passwordConfirmation')
        setPasswordConfirmationError(error ? error.message : '')
    }


    useEffect(() => {

        if (name) {
            validateName()
        }

    }, [name])


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


    useEffect(() => {

        if (passwordConfirmation) {
            validatePasswordConfirmation()
        }

    }, [passwordConfirmation])



    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={container}>
                <Input label='Nome' onChangeText={(value: string) => { setName(value) }} onBlur={validateName} error={nameError.length > 0} />
                <ErrorText text={nameError} />
                <Input label='Email' keyboardType="email-address" onChangeText={(value: string) => { setEmail(value) }} onBlur={validateEmail} error={emailError.length > 0} />
                <ErrorText text={emailError} />
                <Input label='Senha' secureTextEntry={true} textContentType="password" onChangeText={(value: string) => { setPassword(value) }} onBlur={validatePassword} error={passwordError.length > 0} />
                <ErrorText text={passwordError} />
                <Input label='Confirmar Senha' secureTextEntry={true} textContentType="password" onChangeText={(value: string) => { setPasswordConfirmation(value) }} onBlur={validatePasswordConfirmation} error={passwordConfirmationError.length > 0} />
                <ErrorText text={passwordConfirmationError} />
                <Button text="Cadastrar" disabled={!name || !email || !password || !passwordConfirmation || nameError.length > 0 || emailError.length > 0 || passwordError.length > 0 || passwordConfirmationError.length > 0} onClick={register} />
                <ErrorText text={mainError} />
            </View>
        </>
    );
}