import { Text, View, ScrollView, Dimensions } from "react-native"
import React from 'react';
import { SearchForm } from "..";
import { ChatRow } from "../ChatRow";
import { ChatModel } from "../../../domain/models/chat";


interface ChatListComponentProps {
    chatList: ChatModel[]
}

export function ChatListComponent({ chatList }: ChatListComponentProps) {
    return (
        <>

            <SearchForm text="Pesquisar por conversas..." change={() => { }} />
            <Text style={{ color: "black", fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 12, marginTop: 24 }}>Conversas</Text>
            <View style={{ height: Dimensions.get('window').height * 60 / 100 }}>
                <ScrollView>
                    {chatList.map(item => (<ChatRow name={item.userName} message={item.lastMessage} />))}
                </ScrollView>
            </View>
        </>
    )
}