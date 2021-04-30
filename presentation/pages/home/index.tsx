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
import { GetCountNotificationUseCase } from '../../../domain/useCases/get-count-notification';
import { GetInviteListUseCase } from '../../../domain/useCases/get-invite-list';
import { SearchUserUseCase } from '../../../domain/useCases/search-user';
import { SearchForm, TabNavigation, NotFound, UserList, UserRow, NotificationListComponent } from '../../components';
import { HomeContext, HomeProvider } from '../../contexts/home';


import styles from './styles'

interface HomeProps {
    searchUserUseCase: SearchUserUseCase
    getInviteListUseCase: GetInviteListUseCase
    getCountNotificationUseCase: GetCountNotificationUseCase
    navigation: any
}

export function Home({ navigation, searchUserUseCase, getInviteListUseCase, getCountNotificationUseCase }: HomeProps) {

    const { container } = styles;
    const { menuIndex, invites, setInvites, setCountNotification } = useContext(HomeContext)
    const [searchText, setSearchText] = useState('')
    const [users, setUsers] = useState<UserModel[]>([])

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
                setInvites(invites)
            } catch (error) {
                setInvites([])
            }
        }

        async function getCountNotification() {
            try {
                const count = await getCountNotificationUseCase.get()
                setCountNotification(count)
            } catch (error) {

            }
        }

        switch (menuIndex) {
            case 3:
                getInviteList()
                setCountNotification(0)
                break;
        }

        if (menuIndex !== 2 && menuIndex !== 4) {
            getCountNotification()
        }

    }, [menuIndex])

    return (
        <>

            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

            <View style={container}>

                {(menuIndex === 0 || menuIndex === 1)
                    &&
                    <>
                        <SearchForm text="Pesquisar por pessoas..." change={(value) => setSearchText(value)} />

                        {searchText.length > 0 && users.length > 0 ? <UserList users={users} navigation={navigation} /> : searchText.length > 0 && <NotFound text="Ops, não foi encontrado nenhum resultado" />}
                    </>
                }

                {menuIndex === 2 && <SearchForm text="Pesquisar por conversas..." change={() => { }} />}

                {menuIndex === 3 ? invites.length > 0 ? <NotificationListComponent invites={invites} /> : <NotFound text="Ops, não foi encontrado nenhuma notificação" style={{ marginTop: Dimensions.get('window').height * 40 / 100 }} /> : null}

                <TabNavigation navigation={navigation} />
            </View>


        </>
    );
}