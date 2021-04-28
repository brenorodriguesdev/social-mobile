import { Text, View, Dimensions } from "react-native"
import React from 'react';
import { UserRow } from "../UserRow";

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
                {users.map(user => <UserRow key={user.id} name={user.name} />)}
            </View>
        </>
    );

}