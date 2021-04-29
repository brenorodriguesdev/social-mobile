import { AntDesign, Entypo, EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';

import {
    View,
    StatusBar,
    Dimensions,
} from 'react-native';
import { UserModel } from '../../../domain/models/user';
import { GetFriendListUseCase } from '../../../domain/useCases/get-friend-list';
import { FriendList, ProfileHeader } from '../../components';


import styles from './styles'

interface ProfileProps {
    route: any
    navigation: any
    getFriendListUseCase: GetFriendListUseCase
}

export function Profile({ route, getFriendListUseCase, navigation }: ProfileProps) {

    const { user } = route.params;
    const { container } = styles;
    const [ users, setUsers] = useState<UserModel[]>([])
    
    useEffect(() => {
        async function getFriendList() {
            const usersModel = await getFriendListUseCase.get(user.id)
            setUsers(usersModel)
        }
        getFriendList()
    }, [])

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={container}>
                <ProfileHeader user={user} />
                <FriendList users={users} />
                <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', width: Dimensions.get('window').width, height: Dimensions.get('window').height * 50 / 100 }} />
            </View>
        </>
    );
}