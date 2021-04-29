import React, { useEffect, useState } from 'react';

import {
    View,
    StatusBar,
} from 'react-native';
import { UserModel } from '../../../domain/models/user';
import { SearchUserUseCase } from '../../../domain/useCases/search-user';
import { SearchForm, TabNavigation, NotFound, UserList } from '../../components';


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
            <View style={container}>
                <SearchForm text="Pesquisar por pessoas..." change={(value) => setSearchText(value)} />

                {searchText.length > 0 && users.length > 0 ? <UserList users={users} navigation={navigation} /> : searchText.length > 0 && <NotFound text="Ops, não foi encontrado nenhum resultado" />}

                <TabNavigation navigation={navigation} />
            </View>
        </>
    );
}