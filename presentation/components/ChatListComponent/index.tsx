import { Text, View, ScrollView, Dimensions } from "react-native"
import React from 'react';
import { EvilIcons } from "@expo/vector-icons";

export function ChatListComponent() {
    return (
        <>
            <Text style={{ color: "black", fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 36, marginTop: 48 }}>Conversas</Text>
            <View style={{ height: Dimensions.get('window').height * 75 / 100 }}>
                <ScrollView>

                    <View style={{ flexDirection: 'column', width: Dimensions.get('window').width, marginBottom: 12, alignItems: 'center', justifyContent: 'space-around', borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 1, paddingBottom: 12 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'transparent', borderRightColor: '#F0F0F0', borderWidth: 1, paddingRight: 12, width: Dimensions.get('window').width * 35 / 100 }}>
                                <EvilIcons name="user" size={48} />
                                <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Gustavo Lima</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </>
    )
}