import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { SearchForm } from '../../components/SearchForm';


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
                <SearchForm text="Buscar amigos..." iconName="my-location" />
                <Text>Logado</Text>
            </View>
        </>
    );
}