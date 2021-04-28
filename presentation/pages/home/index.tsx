import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
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
                <Text>Logado</Text>
            </View>
        </>
    );
}