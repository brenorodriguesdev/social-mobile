import { AntDesign, Entypo, EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';

import {
    Text,
    View,
    StatusBar,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchForm, TabNavigation, NotFound, UserList, AddButton } from '../../components';


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
                <View style={{ alignItems: 'center', marginTop: 48, width: Dimensions.get('window').width * 90 / 100, height: 256, marginBottom: 12, borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 2 }}>
                    <EvilIcons name="user" size={128} />
                    <Text style={{ fontWeight: 'bold', marginTop: 12 }}>Breno Rodrigues</Text>

                    <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', width: Dimensions.get('window').width * 75 / 100, height: Dimensions.get('window').height * 15 / 100 }}>

                        <AddButton />
                        <TouchableOpacity style={{
                            width: 64,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 6,
                            marginBottom: 12,
                            marginTop: 36
                        }}>
                            <Entypo name="block" size={30} color="black" />
                            <Text>
                                Bloquear
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={{ width: Dimensions.get('window').width * 75 / 100 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 12, marginBottom: 24 }}>Amigos</Text>
                    <ScrollView horizontal={true}>
                        <View style={{ width: 96, height: 96, backgroundColor: '#FBFBFB', marginTop: 10, borderRadius: 5, alignItems: 'center', borderColor: '#A0A0A0', borderWidth: 1, marginRight: 24 }}>
                            <EvilIcons name="user" size={60} style={{ marginTop: 20 }} />
                            <Text style={{ fontSize: 8 }}>Breno Rodrigues</Text>
                        </View>

                        {/* <View style={{ width: 96, height: 96, backgroundColor: '#FBFBFB', marginTop: 10, borderRadius: 5, alignItems: 'center', borderColor: '#A0A0A0', borderWidth: 1, marginRight: 24 }}>
                            <EvilIcons name="user" size={60} style={{ marginTop: 20 }} />
                            <Text style={{ fontSize: 8 }}>Breno Rodrigues</Text>
                        </View>

                        <View style={{ width: 96, height: 96, backgroundColor: '#FBFBFB', marginTop: 10, borderRadius: 5, alignItems: 'center', borderColor: '#A0A0A0', borderWidth: 1, marginRight: 24 }}>
                            <EvilIcons name="user" size={60} style={{ marginTop: 20 }} />
                            <Text style={{ fontSize: 8 }}>Breno Rodrigues</Text>
                        </View> */}
                    </ScrollView>


                </View>

                <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', width: Dimensions.get('window').width, height: Dimensions.get('window').height * 50 / 100 }}>

                </View>
            </View>
        </>
    );
}