import { EvilIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions, SafeAreaView, StatusBar, Keyboard } from "react-native";
import { ChatInput, MessageList } from '../../components';

export function Chat() {
    const [messages, setMessages] = useState([
        {
            text: "Opa, tudo sim e com você?",
            userSend: {
                _id: 1,
                name: 'Teste'
            },
            userReceive: {
                _id: 2,
                name: 'Teste2'
            },
        },
        {
            text: "Oi tudo bem?",
            userSend: {
                _id: 2,
                name: 'Teste'
            },
            userReceive: {
                _id: 1,
                name: 'Teste2'
            },
        }
    ]);


    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'white'
        }}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: '#E0E0E0', borderWidth: 1, paddingTop: 32, backgroundColor: '#F0F0F095', paddingBottom: 8 }}>
                <TouchableOpacity style={{ position: 'absolute', left: 15, top: 35 }} >
                    <MaterialCommunityIcons name="arrow-left" size={26} color="#666" />
                </TouchableOpacity>
                <EvilIcons name="user" size={36} color="#666" />
                <Text style={{ fontWeight: 'bold', color: '#666', fontSize: 12 }}>Breno Rodrigues</Text>
            </View>
            <MessageList messages={messages} />
            <ChatInput />
        </View>
    )
}