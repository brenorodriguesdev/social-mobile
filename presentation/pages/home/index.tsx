import { MaterialIcons, Entypo } from '@expo/vector-icons';
import React from 'react';

import {
    View,
    Text,
    StatusBar,
    Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SearchForm, TabNavigation } from '../../components';


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
                <SearchForm text="Buscar amigos..." />
                <View>
                    <Text style={{ color: "#808080" }}>Ops, não foi encontrado nenhum resultado</Text>
                </View>
                <TabNavigation />
            </View>
        </>
    );
}