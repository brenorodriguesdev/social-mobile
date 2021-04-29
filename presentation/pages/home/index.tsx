import { AntDesign, Entypo, EvilIcons, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';

import {
    Text,
    View,
    StatusBar,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { UserModel } from '../../../domain/models/user';
import { SearchUserUseCase } from '../../../domain/useCases/search-user';
import { SearchForm, TabNavigation, NotFound, UserList, UserRow, NotificationListComponent } from '../../components';


import styles from './styles'

interface HomeProps {
    searchUserUseCase: SearchUserUseCase
    navigation: any
}

export function Home({ navigation, searchUserUseCase }: HomeProps) {

    const { container } = styles;
    const [searchText, setSearchText] = useState('')
    const [users, setUsers] = useState<UserModel[]>([])


    useEffect(() => {
        async function searchUser() {
            if (searchText) {
                try {
                    const usersModel = await searchUserUseCase.search(searchText)
                    setUsers(usersModel)
                } catch (error) {
                    setUsers([])
                }
            }
        }

        searchUser()
    }, [searchText])

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

            <NotificationListComponent />
            {/* 
            <View style={container}>
                <SearchForm text="Pesquisar por pessoas..." change={(value) => setSearchText(value)} />

                {searchText.length > 0 && users.length > 0 ? <UserList users={users} navigation={navigation} /> : searchText.length > 0 && <NotFound text="Ops, não foi encontrado nenhum resultado" />}

                <TabNavigation navigation={navigation} />
            </View> */}

            <TabNavigation navigation={navigation} />
        </>
    );
}