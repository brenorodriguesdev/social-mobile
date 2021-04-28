import { Text, View, Dimensions } from "react-native"
import React from 'react';
import { UserRow } from "../UserRow";
import { ScrollView } from "react-native-gesture-handler";

interface User {
    id: number
    name: string
}

interface UserListProps {
    users: User[]
}

export function UserList({ users }: UserListProps) {
    return (
        <>
            <Text style={{ color: "black", fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 36 }}>Resultados</Text>
            <View style={{ height: Dimensions.get('window').height * 60 / 100 }}>
                <ScrollView>
                    {users.map(user => <UserRow key={user.id} name={user.name} />)}
                </ScrollView>
            </View>
        </>
    );

}