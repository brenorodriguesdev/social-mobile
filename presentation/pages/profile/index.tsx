import { AntDesign, Entypo, EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';

import {
    Text,
    View,
    StatusBar,
    Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FriendList, ProfileHeader } from '../../components';


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
                <ProfileHeader name="Breno Rodrigues" />
                <FriendList users={[{
                    id: 1,
                    name: "Gustavo Lima"
                },
                {
                    id: 2,
                    name: "Max Wesley"
                },
                {
                    id: 3,
                    name: "Evandro Siqueira"
                }
                ]} />
                <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', width: Dimensions.get('window').width, height: Dimensions.get('window').height * 50 / 100 }} />
            </View>
        </>
    );
}