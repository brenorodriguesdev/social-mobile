import { FontAwesome5, MaterialIcons, MaterialCommunityIcons, Entypo, EvilIcons } from '@expo/vector-icons';
import React from 'react';

import {
    View,
    Text,
    StatusBar,
    Dimensions
} from 'react-native';
import { SearchForm, TabNavigation, NotFound, UserList } from '../../components';


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
                <UserList users={[
                    { id: 1, name: 'Breno Rodrigues' },
                    { id: 2, name: 'Max Wesley' },
                    { id: 3, name: 'Gustavo Lima' },
                    { id: 4, name: 'Evandro Siqueira' },
                    { id: 5, name: 'Luis Henrique' },
                ]} />
            
                <TabNavigation navigation={navigation} />
            </View>
        </>
    );
}