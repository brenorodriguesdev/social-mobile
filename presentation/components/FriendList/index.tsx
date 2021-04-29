import { Text, View, Dimensions, ScrollView } from "react-native"
import React from 'react';
import { EvilIcons } from "@expo/vector-icons";

export function FriendList() {
    return (
        <View style={{ width: Dimensions.get('window').width * 75 / 100 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 12, marginBottom: 24 }}>Amigos</Text>
            <ScrollView horizontal={true}>
                <View style={{ width: 96, height: 96, backgroundColor: '#FBFBFB', marginTop: 10, borderRadius: 5, alignItems: 'center', borderColor: '#A0A0A0', borderWidth: 1, marginRight: 24 }}>
                    <EvilIcons name="user" size={60} style={{ marginTop: 20 }} />
                    <Text style={{ fontSize: 8 }}>Breno Rodrigues</Text>
                </View>

                <View style={{ width: 96, height: 96, backgroundColor: '#FBFBFB', marginTop: 10, borderRadius: 5, alignItems: 'center', borderColor: '#A0A0A0', borderWidth: 1, marginRight: 24 }}>
                    <EvilIcons name="user" size={60} style={{ marginTop: 20 }} />
                    <Text style={{ fontSize: 8 }}>Breno Rodrigues</Text>
                </View>

                <View style={{ width: 96, height: 96, backgroundColor: '#FBFBFB', marginTop: 10, borderRadius: 5, alignItems: 'center', borderColor: '#A0A0A0', borderWidth: 1, marginRight: 24 }}>
                    <EvilIcons name="user" size={60} style={{ marginTop: 20 }} />
                    <Text style={{ fontSize: 8 }}>Breno Rodrigues</Text>
                </View>
            </ScrollView>
        </View>
    )
}