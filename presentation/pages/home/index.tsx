import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';


import styles from './styles'

interface HomeProps {
    navigation: any
}
export function Home({ navigation }: HomeProps) {

    const { container } = styles;

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={container}>

                <View style={{
                    position: 'absolute',
                    bottom: 32,
                    left: 20,
                    right: 20,
                    zIndex: 5,
                    flexDirection: 'row'
                }}>
                    <TextInput
                        style={{
                            flex: 1,
                            height: 50,
                            backgroundColor: '#FFF',
                            color: '#333',
                            borderRadius: 25,
                            paddingHorizontal: 20,
                            fontSize: 16,
                            shadowColor: '#000',
                            shadowOpacity: 0.2,
                            shadowOffset: {
                                width: 4,
                                height: 4,
                            },
                            elevation: 2
                        }}
                        placeholder="Buscar serviço..."
                        placeholderTextColor="#999"
                        autoCapitalize="words"
                        autoCorrect={false}
                    />

                    <TouchableOpacity style={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#6271c0',
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 15
                    }}>
                        <MaterialIcons name="my-location" size={20} color="#FFF" />
                    </TouchableOpacity>

                </View>

                <Text>Logado</Text>
            </View>
        </>
    );
}