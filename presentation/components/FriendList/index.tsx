import { Text, View, Dimensions, ScrollView } from "react-native"
import React from 'react';
import { EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import { UserModel } from "../../../domain/models/user";
import { NotFound } from "../NotFound";

interface FriendListProps {
    users: UserModel[]
}

export function FriendList({ users }: FriendListProps) {
    return (
        users.length > 0 ?
            <View style={{ width: Dimensions.get('window').width * 75 / 100 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 12, marginBottom: 24 }}>Amigos</Text>
                <ScrollView horizontal={true}>
                    {users.map(user => (
                        <View key={user.id} style={{ width: 96, height: 96, backgroundColor: '#FBFBFB', marginTop: 10, borderRadius: 5, alignItems: 'center', borderColor: '#A0A0A0', borderWidth: 1, marginRight: 24 }}>
                            <EvilIcons name="user" size={60} style={{ marginTop: 20 }} />
                            <Text style={{ fontSize: 8 }}>{user.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
            :
            <NotFound text="Ops, essa pessoa não tem amigos" style={{ marginTop: 72 }} />

    )
}