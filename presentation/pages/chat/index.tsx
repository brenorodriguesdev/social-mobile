import React, { useState } from 'react';
import { View, StatusBar } from "react-native";
import { ChatHeader, ChatInput, MessageList } from '../../components';

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
            <ChatHeader name="Gustavo Lima" />
            <MessageList messages={messages} />
            <ChatInput />
        </View>
    )
}