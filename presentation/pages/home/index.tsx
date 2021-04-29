import { AntDesign, Entypo, EvilIcons, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useContext, useEffect, useState } from 'react';

import {
    Text,
    View,
    StatusBar,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { InviteModel } from '../../../domain/models/invite';
import { UserModel } from '../../../domain/models/user';
import { GetInviteListUseCase } from '../../../domain/useCases/get-invite-list';
import { SearchUserUseCase } from '../../../domain/useCases/search-user';
import { SearchForm, TabNavigation, NotFound, UserList, UserRow, NotificationListComponent } from '../../components';
import { HomeContext, HomeProvider } from '../../contexts/home';


import styles from './styles'

interface HomeProps {
    searchUserUseCase: SearchUserUseCase
    getInviteListUseCase: GetInviteListUseCase
    navigation: any
}

export function Home({ navigation, searchUserUseCase, getInviteListUseCase }: HomeProps) {

    const { container } = styles;
    const { menuIndex } = useContext(HomeContext)
    const [searchText, setSearchText] = useState('')
    const [users, setUsers] = useState<UserModel[]>([])
    const [invites, setInvites] = useState<InviteModel[]>([])


    useEffect(() => {
        async function searchUser() {
            if (searchText && menuIndex == 0) {
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

    useEffect(() => {

        async function getInviteList() {
            try {
                const invites = await getInviteListUseCase.get()
                console.log(invites)
                setInvites(invites)
            } catch (error) {
                setInvites([])
            }
        }
        if (menuIndex === 3) {
            getInviteList()
        }

    }, [menuIndex])

    return (
        <>

            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

            <View style={container}>


                {menuIndex === 0 
                &&
                    <>
                        <SearchForm text="Pesquisar por pessoas..." change={(value) => setSearchText(value)} />

                        {searchText.length > 0 && users.length > 0 ? <UserList users={users} navigation={navigation} /> : searchText.length > 0 && <NotFound text="Ops, não foi encontrado nenhum resultado" />}
                    </>
                }

                {menuIndex === 3 && <NotificationListComponent invites={invites} />}

            </View>

            <TabNavigation navigation={navigation} />

        </>
    );
}