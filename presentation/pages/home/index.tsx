import { FontAwesome5, MaterialIcons, MaterialCommunityIcons, Entypo, EvilIcons } from '@expo/vector-icons';
import React from 'react';

import {
    View,
    Text,
    StatusBar,
    Dimensions
} from 'react-native';
import { SearchForm, TabNavigation, NotFound } from '../../components';


import styles from './styles'

interface HomeProps {
    navigation: any
}

export function Home({ navigation }: HomeProps) {

    const { container } = styles;

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={container}>
                <SearchForm text="Buscar amigos..." />
                <NotFound />
                {/* <Text style={{color:"#808080",fontSize:24,fontWeight:'bold', alignSelf:'flex-start', marginLeft: 36}}>Resultados</Text>
                <View style={{height: Dimensions.get('window').width}}>
                    <View style={{ flexDirection: 'row', width: Dimensions.get('window').width * 90 / 100, height: 48, marginBottom: 12, alignItems:'center', borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 2 }}>
                        <EvilIcons name="user" size={36} color="#808080" />
                        <Text style={{ color: "#808080", fontWeight:'bold', fontSize: 12 }}>Breno Rodrigues</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: Dimensions.get('window').width * 90 / 100, height: 48, marginBottom: 12, alignItems:'center', borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 2 }}>
                        <EvilIcons name="user" size={36} color="#808080" />
                        <Text style={{ color: "#808080", fontWeight:'bold', fontSize: 12 }}>Gustavo Lima</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: Dimensions.get('window').width * 90 / 100, height: 48, marginBottom: 12, alignItems:'center', borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 2 }}>
                        <EvilIcons name="user" size={36} color="#808080" />
                        <Text style={{ color: "#808080", fontWeight:'bold', fontSize: 12 }}>Evandro Siqueira</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: Dimensions.get('window').width * 90 / 100, height: 48, marginBottom: 12, alignItems:'center', borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 2 }}>
                        <EvilIcons name="user" size={36} color="#808080" />
                        <Text style={{ color: "#808080", fontWeight:'bold', fontSize: 12 }}>Max Wesley</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: Dimensions.get('window').width * 90 / 100, height: 48, marginBottom: 12, alignItems:'center', borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 2 }}>
                        <EvilIcons name="user" size={36} color="#808080" />
                        <Text style={{ color: "#808080", fontWeight:'bold', fontSize: 12 }}>Luis Henrique</Text>
                    </View>
                </View> */}
                <TabNavigation navigation={navigation} />
            </View>
        </>
    );
}