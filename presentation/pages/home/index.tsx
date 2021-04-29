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
import { SearchForm, TabNavigation, NotFound, UserList, UserRow } from '../../components';


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
                <Text style={{ color: "black", fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 36, marginTop: 48 }}>Notificações</Text>

                <View style={{ height: Dimensions.get('window').height * 60 / 100 }}>
                    <ScrollView>
                        <View style={{ flexDirection: 'column', width: Dimensions.get('window').width, marginBottom: 12, alignItems: 'center', justifyContent: 'space-around', borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 1, paddingBottom: 12 }}>

                            <Text style={{ fontSize: 10, marginBottom: 18 }}>Enviou uma solicitação de amizade para você</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'transparent', borderRightColor: '#F0F0F0', borderWidth: 1, paddingRight: 12, width: Dimensions.get('window').width * 35 / 100 }}>
                                    <EvilIcons name="user" size={48} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Gustavo Lima</Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: Dimensions.get('window').width * 50 / 100 }}>
                                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 24 }}>
                                        <AntDesign name="adduser" size={18} />
                                        <Text style={{ fontWeight: 'bold', fontSize: 8 }}>Aceitar</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 60 }}>
                                        <MaterialCommunityIcons name="cancel" size={18} />
                                        <Text style={{ fontWeight: 'bold', fontSize: 8 }}>Recusar</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>

                        <View style={{ flexDirection: 'column', width: Dimensions.get('window').width, marginBottom: 12, alignItems: 'center', justifyContent: 'space-around', borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 1, paddingBottom: 12 }}>

                            <Text style={{ fontSize: 10, marginBottom: 18 }}>Enviou uma solicitação de amizade para você</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'transparent', borderRightColor: '#F0F0F0', borderWidth: 1, paddingRight: 12, width: Dimensions.get('window').width * 35 / 100 }}>
                                    <EvilIcons name="user" size={48} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Max Wesley</Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: Dimensions.get('window').width * 50 / 100 }}>
                                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 24 }}>
                                        <AntDesign name="adduser" size={18} />
                                        <Text style={{ fontWeight: 'bold', fontSize: 8 }}>Aceitar</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 60 }}>
                                        <MaterialCommunityIcons name="cancel" size={18} />
                                        <Text style={{ fontWeight: 'bold', fontSize: 8 }}>Recusar</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>

                        <View style={{ flexDirection: 'column', width: Dimensions.get('window').width, marginBottom: 12, alignItems: 'center', justifyContent: 'space-around', borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 1, paddingBottom: 12 }}>

                            <Text style={{ fontSize: 10, marginBottom: 18 }}>Enviou uma solicitação de amizade para você</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'transparent', borderRightColor: '#F0F0F0', borderWidth: 1, paddingRight: 12, width: Dimensions.get('window').width * 35 / 100 }}>
                                    <EvilIcons name="user" size={48} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Evando Siqueira</Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: Dimensions.get('window').width * 50 / 100 }}>
                                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 24 }}>
                                        <AntDesign name="adduser" size={18} />
                                        <Text style={{ fontWeight: 'bold', fontSize: 8 }}>Aceitar</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 60 }}>
                                        <MaterialCommunityIcons name="cancel" size={18} />
                                        <Text style={{ fontWeight: 'bold', fontSize: 8 }}>Recusar</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>



                        {/* 
                        <View style={{ flexDirection: 'row', width: Dimensions.get('window').width * 90 / 100, marginBottom: 12, alignItems: 'center', justifyContent: 'center', borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 1 }}>
                            <View>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <EvilIcons name="user" size={48} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Evandro Siqueira</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                                    <Text style={{ fontSize: 10, marginTop: 24, marginBottom: 12 }}>Enviou uma solicitação de amizade para você</Text>
                                    <View style={{ flexDirection: 'row' }}>

                                        <TouchableOpacity style={{

                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginBottom: 12,
                                            marginTop: 12
                                        }}>
                                            <Entypo name="add-user" size={18} color="black" />
                                            <Text style={{ fontSize: 10 }}>Aceitar</Text>
                                        </TouchableOpacity>


                                        <TouchableOpacity style={{

                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginLeft: 48,
                                            marginBottom: 12,
                                            marginTop: 12
                                        }}>
                                            <MaterialIcons name="cancel" size={18} />
                                            <Text style={{ fontSize: 10 }}>Recusar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View> */}

                    </ScrollView>
                </View>

                <TabNavigation navigation={navigation} />
            </View>
            {/* <View style={container}>
                <SearchForm text="Pesquisar por pessoas..." change={(value) => setSearchText(value)} />

                {searchText.length > 0 && users.length > 0 ? <UserList users={users} navigation={navigation} /> : searchText.length > 0 && <NotFound text="Ops, não foi encontrado nenhum resultado" />}

                <TabNavigation navigation={navigation} />
            </View> */}
        </>
    );
}