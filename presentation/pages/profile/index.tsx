import React, { useEffect, useState } from 'react';

import {
    View,
    StatusBar,
} from 'react-native';
import { SearchForm, TabNavigation, NotFound, UserList } from '../../components';


import styles from './styles'

interface ProfileProps {
    navigation: any
}

export function Profile({ navigation }: ProfileProps) {

    const { container } = styles;

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={container}>               
                <TabNavigation navigation={navigation} />
            </View>
        </>
    );
}