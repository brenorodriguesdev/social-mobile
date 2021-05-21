import React, { useContext, useEffect, useState } from 'react';

import {
    View,
    StatusBar,
    Dimensions,
} from 'react-native';
import { ChatModel } from '../../../domain/models/chat';
import { UserModel } from '../../../domain/models/user';
import { GetAllChatUseCase } from '../../../domain/useCases/get-all-chat';
import { GetCountNotificationUseCase } from '../../../domain/useCases/get-count-notification';
import { GetFriendListUseCase } from '../../../domain/useCases/get-friend-list';
import { GetInviteListUseCase } from '../../../domain/useCases/get-invite-list';
import { SearchUserUseCase } from '../../../domain/useCases/search-user';
import { ViewNotificationUseCase } from '../../../domain/useCases/view-notification';
import { SearchForm, TabNavigation, NotFound, UserList, NotificationListComponent, ChatListComponent } from '../../components';
import { HomeContext } from '../../contexts/home';


import styles from './styles'

interface HomeProps {
    searchUserUseCase: SearchUserUseCase
    getFriendListUseCase: GetFriendListUseCase
    getAllChatUseCase: GetAllChatUseCase
    getInviteListUseCase: GetInviteListUseCase
    getCountNotificationUseCase: GetCountNotificationUseCase
    viewNotificationUseCase: ViewNotificationUseCase
    navigation: any
}

export function Home({ navigation, searchUserUseCase, getFriendListUseCase, getAllChatUseCase, getInviteListUseCase, getCountNotificationUseCase, viewNotificationUseCase }: HomeProps) {

    const { container } = styles;
    const { menuIndex, invites, setInvites, setCountNotification } = useContext(HomeContext)
    const [searchText, setSearchText] = useState('')
    const [users, setUsers] = useState<UserModel[]>([])
    const [chats, setChats] = useState<ChatModel[]>([])
    const [friendList, setFriendList] = useState<UserModel[]>([])

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

        async function getFriendList() {
            try {
                const friendList = await getFriendListUseCase.get()
                setFriendList(friendList)
            } catch (error) {
                setFriendList([])
            }
        }

        async function getAllChat() {
            try {
                const chats = await getAllChatUseCase.get()
                setChats(chats)
            } catch (error) {
                setChats([])
            }
        }

        async function getCountNotification() {
            try {
                const count = await getCountNotificationUseCase.get()
                setCountNotification(count)
            } catch (error) {

            }
        }

        async function viewNotification() {
            setCountNotification(0)
            await viewNotificationUseCase.view()
        }

        switch (menuIndex) {
            case 3:
                getInviteList()
                viewNotification()
                break;
            case 2:
                getFriendList()
                getAllChat()
                break;
            default:
                if (menuIndex !== 4) {
                    getCountNotification()
                }
                break;
        }

    }, [menuIndex])

    return (
        <>

            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

            <View style={container}>

                {(menuIndex === 0)
                    &&
                    <>
                        <SearchForm text="Pesquisar por pessoas..." change={(value) => setSearchText(value)} />

                        {searchText.length > 0 && users.length > 0 ? <UserList users={users} navigation={navigation} /> : searchText.length > 0 && <NotFound text="Ops, não foi encontrado nenhum resultado" />}
                    </>
                }

                {menuIndex === 1 && <ChatListComponent />}

                {menuIndex === 2 && <ChatListComponent />}

                {menuIndex === 3 ? invites.length > 0 ? <NotificationListComponent invites={invites} /> : <NotFound text="Ops, não foi encontrado nenhuma notificação" style={{ marginTop: Dimensions.get('window').height * 40 / 100 }} /> : null}

                <TabNavigation navigation={navigation} />
            </View>


        </>
    );
}