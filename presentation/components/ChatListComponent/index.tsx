import { Text, View, ScrollView, Dimensions } from "react-native"
import React from 'react';
import { SearchForm } from "..";
import { ChatRow } from "../ChatRow";



export function ChatListComponent() {
    return (
        <>

            <SearchForm text="Pesquisar por conversas..." change={() => { }} />
            <Text style={{ color: "black", fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 12, marginTop: 24 }}>Conversas</Text>
            <View style={{ height: Dimensions.get('window').height * 60 / 100 }}>
                <ScrollView>

                    <ChatRow name="Gustavo Lima" message="To duro, ta foda mano" />
                    <ChatRow name="Max Wesley" message="Bar da sinuca?" />
                    <ChatRow name="Evandro Siqueira" message="To ficando velho mesmo!" />

                </ScrollView>
            </View>
        </>
    )
}